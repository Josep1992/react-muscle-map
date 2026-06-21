import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Star_Jump"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","shoulders"])

export default function ExerciseStarJumpMuscleMap({ title = "Star Jump muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
