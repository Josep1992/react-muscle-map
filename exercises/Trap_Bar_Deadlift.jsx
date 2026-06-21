import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Trap_Bar_Deadlift"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings"])

export default function ExerciseTrapBarDeadliftMuscleMap({ title = "Trap Bar Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
