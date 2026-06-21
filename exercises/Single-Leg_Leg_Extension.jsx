import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Single-Leg_Leg_Extension"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSingleLegLegExtensionMuscleMap({ title = "Single-Leg Leg Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
