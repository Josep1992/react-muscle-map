import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Internal_Rotation_with_Band"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseInternalRotationWithBandMuscleMap({ title = "Internal Rotation with Band muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
