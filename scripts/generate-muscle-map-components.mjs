import { createHash } from 'node:crypto'
import { readFile, mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const GENERATOR_VERSION = 1
const DEFAULT_CHUNK_SIZE = 50
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = path.join(projectRoot, 'datasets', 'exercises.json')
const muscleMapDirectory = projectRoot
const componentDirectory = path.join(muscleMapDirectory, 'exercises')
const chunkDirectory = path.join(muscleMapDirectory, 'chunks')
const canonicalComponentPath = path.join(muscleMapDirectory, 'MuscleMap.jsx')

const supportedMuscles = new Set([
  'abdominals',
  'abductors',
  'adductors',
  'biceps',
  'calves',
  'chest',
  'forearms',
  'glutes',
  'hamstrings',
  'lats',
  'lower back',
  'middle back',
  'neck',
  'quadriceps',
  'shoulders',
  'traps',
  'triceps'
])

function parseArguments(argumentsList) {
  const options = {
    all: false,
    check: false,
    chunk: 1,
    chunkSize: DEFAULT_CHUNK_SIZE
  }

  for (let index = 0; index < argumentsList.length; index += 1) {
    const argument = argumentsList[index]

    if (argument === '--all') {
      options.all = true
      continue
    }

    if (argument === '--check') {
      options.check = true
      continue
    }

    if (argument === '--chunk' || argument === '--chunk-size') {
      const value = Number(argumentsList[index + 1])
      if (!Number.isInteger(value) || value < 1) {
        throw new Error(`${argument} requires a positive integer.`)
      }

      if (argument === '--chunk') options.chunk = value
      if (argument === '--chunk-size') options.chunkSize = value
      index += 1
      continue
    }

    throw new Error(`Unknown argument: ${argument}`)
  }

  return options
}

function compareCodePoints(firstValue, secondValue) {
  if (firstValue < secondValue) return -1
  if (firstValue > secondValue) return 1
  return 0
}

function toComponentName(exerciseId) {
  const tokens = exerciseId.match(/[A-Za-z0-9]+/g) ?? []
  const pascalCaseId = tokens.map((token) => token[0].toUpperCase() + token.slice(1)).join('')
  return `Exercise${pascalCaseId}MuscleMap`
}

function hash(content) {
  return createHash('sha256').update(content).digest('hex')
}

function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`
}

function validateExercises(exercises) {
  if (!Array.isArray(exercises) || exercises.length === 0) {
    throw new Error('Exercise source must be a non-empty array.')
  }

  const ids = new Set()
  const caseFoldedIds = new Set()
  const componentNames = new Set()
  const overlaps = []

  for (const exercise of exercises) {
    if (!exercise.id || !/^[0-9A-Za-z_-]+$/.test(exercise.id)) {
      throw new Error(`Invalid exercise ID: ${exercise.id}`)
    }

    const componentName = toComponentName(exercise.id)
    const caseFoldedId = exercise.id.toLowerCase()

    if (ids.has(exercise.id)) throw new Error(`Duplicate exercise ID: ${exercise.id}`)
    if (caseFoldedIds.has(caseFoldedId)) {
      throw new Error(`Case-insensitive filename collision: ${exercise.id}`)
    }
    if (componentNames.has(componentName)) {
      throw new Error(`Component name collision: ${componentName}`)
    }

    ids.add(exercise.id)
    caseFoldedIds.add(caseFoldedId)
    componentNames.add(componentName)

    const primaryMuscles = exercise.primaryMuscles ?? []
    const secondaryMuscles = exercise.secondaryMuscles ?? []
    const unknownMuscles = [...primaryMuscles, ...secondaryMuscles].filter(
      (muscle) => !supportedMuscles.has(muscle)
    )

    if (unknownMuscles.length > 0) {
      throw new Error(`${exercise.id} has unsupported muscles: ${unknownMuscles.join(', ')}`)
    }

    const repeatedMuscles = primaryMuscles.filter((muscle) => secondaryMuscles.includes(muscle))
    if (repeatedMuscles.length > 0) {
      overlaps.push({ id: exercise.id, muscles: repeatedMuscles })
    }
  }

  return overlaps
}

function renderComponent(exercise) {
  const componentName = toComponentName(exercise.id)
  const title = `${exercise.name} muscle map`

  return `import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = ${JSON.stringify(exercise.id)}
export const primaryMuscles = Object.freeze(${JSON.stringify(exercise.primaryMuscles)})
export const secondaryMuscles = Object.freeze(${JSON.stringify(exercise.secondaryMuscles)})

export default function ${componentName}({ title = ${JSON.stringify(title)}, ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
`
}

function renderExerciseTargets(exercises) {
  const targets = Object.fromEntries(
    exercises.map((exercise) => [
      exercise.id,
      {
        name: exercise.name,
        primaryMuscles: exercise.primaryMuscles,
        secondaryMuscles: exercise.secondaryMuscles
      }
    ])
  )

  return `export const exerciseTargets = Object.freeze(${JSON.stringify(targets, null, 2)})

export function getExerciseTargets(exerciseId) {
  return exerciseTargets[exerciseId]
}
`
}

function renderGeneratedTypes(exercises) {
  const exerciseIds = exercises.map((exercise) => `  | ${JSON.stringify(exercise.id)}`).join('\n')
  return `export type ExerciseId =\n${exerciseIds}\n`
}

function renderDatasetManifest({ exercises, sourceContent }) {
  return {
    schemaVersion: 1,
    exerciseCount: exercises.length,
    muscleGroupCount: supportedMuscles.size,
    aggregatePath: 'exercises.json',
    splitDirectory: 'exercises',
    sourceHash: hash(sourceContent),
    aggregateHash: hash(stableJson(exercises)),
    entries: exercises.map((exercise) => {
      const content = stableJson(exercise)
      return {
        id: exercise.id,
        path: `exercises/${exercise.id}.json`,
        hash: hash(content)
      }
    })
  }
}

async function assertExpectedFile(filePath, expectedContent) {
  let actualContent

  try {
    actualContent = await readFile(filePath, 'utf8')
  } catch (error) {
    if (error.code === 'ENOENT') throw new Error(`Missing generated file: ${filePath}`)
    throw error
  }

  if (actualContent !== expectedContent) {
    throw new Error(`Generated file is stale: ${filePath}`)
  }
}

async function persistFile({ check, content, filePath }) {
  if (check) {
    await assertExpectedFile(filePath, content)
    return
  }

  await mkdir(path.dirname(filePath), { recursive: true })
  await writeFile(filePath, content)
}

async function generate() {
  const options = parseArguments(process.argv.slice(2))
  const sourceContent = await readFile(sourcePath, 'utf8')
  const canonicalComponent = await readFile(canonicalComponentPath, 'utf8')
  const exercises = JSON.parse(sourceContent).sort((firstExercise, secondExercise) =>
    compareCodePoints(firstExercise.id, secondExercise.id)
  )
  const overlaps = validateExercises(exercises)
  const totalChunks = Math.ceil(exercises.length / options.chunkSize)

  if (!options.all && options.chunk > totalChunks) {
    throw new Error(`Chunk ${options.chunk} does not exist. Expected 1-${totalChunks}.`)
  }

  const startIndex = options.all ? 0 : (options.chunk - 1) * options.chunkSize
  const endIndex = options.all ? exercises.length : startIndex + options.chunkSize
  const selectedExercises = exercises.slice(startIndex, endIndex)
  const entries = []

  for (const exercise of selectedExercises) {
    const content = renderComponent(exercise)
    const componentName = toComponentName(exercise.id)
    const relativeModulePath = `exercises/${exercise.id}.jsx`
    const filePath = path.join(muscleMapDirectory, relativeModulePath)

    await persistFile({ check: options.check, content, filePath })
    entries.push({
      id: exercise.id,
      name: exercise.name,
      componentName,
      modulePath: relativeModulePath,
      primaryMuscles: exercise.primaryMuscles,
      secondaryMuscles: exercise.secondaryMuscles,
      outputHash: hash(content)
    })
  }

  const manifest = {
    schemaVersion: 1,
    generatorVersion: GENERATOR_VERSION,
    sourceCount: exercises.length,
    sourceHash: hash(sourceContent),
    canonicalComponentHash: hash(canonicalComponent),
    chunk: options.all ? 'all' : options.chunk,
    chunkSize: options.chunkSize,
    totalChunks,
    entryCount: entries.length,
    sourceOverlapCount: overlaps.length,
    entries
  }
  const manifestName = options.all ? 'all.json' : `chunk-${String(options.chunk).padStart(2, '0')}.json`
  const manifestPath = path.join(chunkDirectory, manifestName)

  await persistFile({ check: options.check, content: stableJson(manifest), filePath: manifestPath })

  if (options.all) {
    const targetsPath = path.join(muscleMapDirectory, 'exerciseTargets.mjs')
    const generatedTypesPath = path.join(muscleMapDirectory, 'types', 'generated.d.ts')
    const datasetDirectory = path.join(muscleMapDirectory, 'datasets')
    const aggregateDatasetPath = path.join(datasetDirectory, 'exercises.json')
    const datasetManifestPath = path.join(datasetDirectory, 'manifest.json')
    await persistFile({
      check: options.check,
      content: renderExerciseTargets(exercises),
      filePath: targetsPath
    })
    await persistFile({
      check: options.check,
      content: renderGeneratedTypes(exercises),
      filePath: generatedTypesPath
    })
    await persistFile({
      check: options.check,
      content: stableJson(exercises),
      filePath: aggregateDatasetPath
    })

    for (const exercise of exercises) {
      await persistFile({
        check: options.check,
        content: stableJson(exercise),
        filePath: path.join(datasetDirectory, 'exercises', `${exercise.id}.json`)
      })
    }

    await persistFile({
      check: options.check,
      content: stableJson(renderDatasetManifest({ exercises, sourceContent })),
      filePath: datasetManifestPath
    })
  }

  const mode = options.check ? 'Validated' : 'Generated'
  console.log(`${mode} ${entries.length} components (${options.all ? 'all exercises' : `chunk ${options.chunk}/${totalChunks}`}).`)
  console.log(`Source overlaps preserved with primary precedence: ${overlaps.length}.`)
}

generate().catch((error) => {
  console.error(error.message)
  process.exitCode = 1
})
