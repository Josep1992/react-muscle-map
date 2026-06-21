import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dips_-_Chest_Version"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseDipsChestVersionMuscleMap({ title = "Dips - Chest Version muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
