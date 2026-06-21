import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "External_Rotation"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseExternalRotationMuscleMap({ title = "External Rotation muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
