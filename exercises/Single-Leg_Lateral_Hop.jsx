import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Single-Leg_Lateral_Hop"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","hamstrings"])

export default function ExerciseSingleLegLateralHopMuscleMap({ title = "Single-Leg Lateral Hop muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
