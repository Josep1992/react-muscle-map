import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lateral_Box_Jump"
export const primaryMuscles = Object.freeze(["adductors"])
export const secondaryMuscles = Object.freeze(["abductors","calves","glutes","hamstrings","quadriceps"])

export default function ExerciseLateralBoxJumpMuscleMap({ title = "Lateral Box Jump muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
