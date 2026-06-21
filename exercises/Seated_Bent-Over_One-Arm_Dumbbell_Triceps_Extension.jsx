import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Bent-Over_One-Arm_Dumbbell_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedBentOverOneArmDumbbellTricepsExtensionMuscleMap({ title = "Seated Bent-Over One-Arm Dumbbell Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
