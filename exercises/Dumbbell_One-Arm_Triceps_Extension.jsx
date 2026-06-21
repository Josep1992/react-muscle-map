import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_One-Arm_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDumbbellOneArmTricepsExtensionMuscleMap({ title = "Dumbbell One-Arm Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
