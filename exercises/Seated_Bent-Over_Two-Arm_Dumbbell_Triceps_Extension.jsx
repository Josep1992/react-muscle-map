import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Bent-Over_Two-Arm_Dumbbell_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedBentOverTwoArmDumbbellTricepsExtensionMuscleMap({ title = "Seated Bent-Over Two-Arm Dumbbell Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
