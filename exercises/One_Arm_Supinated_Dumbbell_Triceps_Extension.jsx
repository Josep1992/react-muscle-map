import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One_Arm_Supinated_Dumbbell_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseOneArmSupinatedDumbbellTricepsExtensionMuscleMap({ title = "One Arm Supinated Dumbbell Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
