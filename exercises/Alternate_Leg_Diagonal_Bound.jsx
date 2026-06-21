import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Alternate_Leg_Diagonal_Bound"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","glutes","hamstrings"])

export default function ExerciseAlternateLegDiagonalBoundMuscleMap({ title = "Alternate Leg Diagonal Bound muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
