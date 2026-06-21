import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'

import {
  MUSCLE_GROUPS,
  getMuscleState,
  toMuscleId,
  validateMuscleGroups
} from './muscleMap.mjs'
import { exerciseTargets } from './exerciseTargets.mjs'

const pilotExercises = JSON.parse(
  await readFile(new URL('./pilot-exercises.json', import.meta.url), 'utf8')
)
const componentSource = await readFile(new URL('./MuscleMap.jsx', import.meta.url), 'utf8')
const allExercises = JSON.parse(
  await readFile(new URL('./datasets/exercises.json', import.meta.url), 'utf8')
)

async function runTest(name, test) {
  await test()
  console.log(`PASS ${name}`)
}

await runTest('defines all 17 dataset muscle groups', () => {
  assert.equal(MUSCLE_GROUPS.length, 17)
  assert.equal(new Set(MUSCLE_GROUPS).size, 17)
})

await runTest('uses readable semantic IDs', () => {
  assert.equal(toMuscleId('abdominals'), 'muscle-abdominals')
  assert.equal(toMuscleId('lower back'), 'muscle-lower-back')
})

await runTest('renders every supported muscle group in the SVG', () => {
  for (const muscle of MUSCLE_GROUPS) {
    assert.match(componentSource, new RegExp(`muscle="${muscle}"`), muscle)
  }
})

await runTest('prioritizes primary state over secondary state', () => {
  assert.equal(
    getMuscleState({
      muscle: 'chest',
      primaryMuscles: ['chest'],
      secondaryMuscles: ['chest']
    }),
    'primary'
  )
})

await runTest('returns inactive for an untargeted muscle', () => {
  assert.equal(
    getMuscleState({
      muscle: 'neck',
      primaryMuscles: ['chest'],
      secondaryMuscles: ['triceps']
    }),
    'inactive'
  )
})

await runTest('all pilot fixtures use supported muscle names', () => {
  for (const exercise of pilotExercises) {
    const muscles = [...exercise.primaryMuscles, ...exercise.secondaryMuscles]
    assert.deepEqual(validateMuscleGroups(muscles), [], exercise.id)
  }
})

await runTest('registry covers all 873 source exercises', () => {
  const sourceIds = allExercises.map((exercise) => exercise.id).sort()
  const registryIds = Object.keys(exerciseTargets).sort()

  assert.equal(sourceIds.length, 873)
  assert.deepEqual(registryIds, sourceIds)
})

await runTest('all exercise wrappers delegate to the canonical SVG', async () => {
  const wrapperDirectory = new URL('./exercises/', import.meta.url)
  const wrapperNames = (await readdir(wrapperDirectory)).filter((name) => name.endsWith('.jsx'))

  assert.equal(wrapperNames.length, 873)

  for (const wrapperName of wrapperNames) {
    const wrapperSource = await readFile(new URL(wrapperName, wrapperDirectory), 'utf8')
    assert.doesNotMatch(wrapperSource, /<svg\b/, wrapperName)
    assert.match(wrapperSource, /<MuscleMap\b/, wrapperName)
  }
})

await runTest('packaged datasets cover all source exercises', async () => {
  const datasetDirectory = new URL('./datasets/exercises/', import.meta.url)
  const packagedExercises = JSON.parse(
    await readFile(new URL('./datasets/exercises.json', import.meta.url), 'utf8')
  )
  const datasetManifest = JSON.parse(
    await readFile(new URL('./datasets/manifest.json', import.meta.url), 'utf8')
  )
  const splitDatasetNames = (await readdir(datasetDirectory)).filter((name) =>
    name.endsWith('.json')
  )

  assert.equal(packagedExercises.length, 873)
  assert.equal(splitDatasetNames.length, 873)
  assert.equal(datasetManifest.exerciseCount, 873)
  assert.deepEqual(
    packagedExercises.map((exercise) => exercise.id),
    allExercises.map((exercise) => exercise.id).sort()
  )
})
