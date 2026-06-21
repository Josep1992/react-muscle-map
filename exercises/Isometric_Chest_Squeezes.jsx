import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Isometric_Chest_Squeezes"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseIsometricChestSqueezesMuscleMap({ title = "Isometric Chest Squeezes muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
