import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One_Arm_Against_Wall"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseOneArmAgainstWallMuscleMap({ title = "One Arm Against Wall muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
