import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Overhead_Barbell_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseStandingOverheadBarbellTricepsExtensionMuscleMap({ title = "Standing Overhead Barbell Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
