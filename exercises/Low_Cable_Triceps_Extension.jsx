import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Low_Cable_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLowCableTricepsExtensionMuscleMap({ title = "Low Cable Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
