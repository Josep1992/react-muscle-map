import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Single-Leg_Hop_Progression"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","hamstrings"])

export default function ExerciseSingleLegHopProgressionMuscleMap({ title = "Single-Leg Hop Progression muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
