import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "External_Rotation_with_Cable"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseExternalRotationWithCableMuscleMap({ title = "External Rotation with Cable muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
