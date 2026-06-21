import MuscleMap from './MuscleMap.jsx'
import { getExerciseTargets } from './exerciseTargets.mjs'

export default function ExerciseMuscleMap({ exerciseId, title, ...props }) {
  const targets = getExerciseTargets(exerciseId)

  if (!targets) {
    throw new Error(`Unknown exercise ID: ${exerciseId}`)
  }

  return (
    <MuscleMap
      {...props}
      title={title ?? `${targets.name} muscle map`}
      primaryMuscles={targets.primaryMuscles}
      secondaryMuscles={targets.secondaryMuscles}
    />
  )
}
