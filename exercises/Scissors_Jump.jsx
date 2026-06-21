import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Scissors_Jump"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings"])

export default function ExerciseScissorsJumpMuscleMap({ title = "Scissors Jump muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
