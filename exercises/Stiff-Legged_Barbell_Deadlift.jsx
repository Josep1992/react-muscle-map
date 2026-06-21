import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Stiff-Legged_Barbell_Deadlift"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["glutes","lower back"])

export default function ExerciseStiffLeggedBarbellDeadliftMuscleMap({ title = "Stiff-Legged Barbell Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
