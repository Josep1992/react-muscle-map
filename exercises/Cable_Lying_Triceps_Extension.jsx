import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Lying_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableLyingTricepsExtensionMuscleMap({ title = "Cable Lying Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
