import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_One_Arm_Tricep_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableOneArmTricepExtensionMuscleMap({ title = "Cable One Arm Tricep Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
