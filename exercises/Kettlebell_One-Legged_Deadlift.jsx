import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_One-Legged_Deadlift"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["glutes","lower back"])

export default function ExerciseKettlebellOneLeggedDeadliftMuscleMap({ title = "Kettlebell One-Legged Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
