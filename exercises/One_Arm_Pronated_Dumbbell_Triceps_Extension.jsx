import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One_Arm_Pronated_Dumbbell_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseOneArmPronatedDumbbellTricepsExtensionMuscleMap({ title = "One Arm Pronated Dumbbell Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
