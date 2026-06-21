import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Low-Pulley_One-Arm_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseStandingLowPulleyOneArmTricepsExtensionMuscleMap({ title = "Standing Low-Pulley One-Arm Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
