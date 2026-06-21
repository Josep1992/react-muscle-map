import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Decline_EZ_Bar_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDeclineEZBarTricepsExtensionMuscleMap({ title = "Decline EZ Bar Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
