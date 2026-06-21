import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Stiff-Legged_Dumbbell_Deadlift"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["glutes","lower back"])

export default function ExerciseStiffLeggedDumbbellDeadliftMuscleMap({ title = "Stiff-Legged Dumbbell Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
