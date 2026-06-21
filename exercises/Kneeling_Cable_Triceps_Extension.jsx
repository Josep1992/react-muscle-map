import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kneeling_Cable_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseKneelingCableTricepsExtensionMuscleMap({ title = "Kneeling Cable Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
