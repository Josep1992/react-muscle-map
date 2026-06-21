import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Sled_Overhead_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSledOverheadTricepsExtensionMuscleMap({ title = "Sled Overhead Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
