import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Towel_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingTowelTricepsExtensionMuscleMap({ title = "Standing Towel Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
