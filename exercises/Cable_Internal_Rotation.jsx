import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Internal_Rotation"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableInternalRotationMuscleMap({ title = "Cable Internal Rotation muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
