import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_One-Arm_Dumbbell_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseStandingOneArmDumbbellTricepsExtensionMuscleMap({ title = "Standing One-Arm Dumbbell Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
