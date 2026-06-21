import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Flyes_With_External_Rotation"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseReverseFlyesWithExternalRotationMuscleMap({ title = "Reverse Flyes With External Rotation muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
