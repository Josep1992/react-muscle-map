import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "External_Rotation_with_Band"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseExternalRotationWithBandMuscleMap({ title = "External Rotation with Band muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
