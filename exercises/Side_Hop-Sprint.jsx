import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Side_Hop-Sprint"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","hamstrings"])

export default function ExerciseSideHopSprintMuscleMap({ title = "Side Hop-Sprint muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
