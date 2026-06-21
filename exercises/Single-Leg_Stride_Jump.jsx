import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Single-Leg_Stride_Jump"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","hamstrings"])

export default function ExerciseSingleLegStrideJumpMuscleMap({ title = "Single-Leg Stride Jump muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
