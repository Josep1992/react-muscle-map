import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Side_to_Side_Box_Shuffle"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","hamstrings"])

export default function ExerciseSideToSideBoxShuffleMuscleMap({ title = "Side to Side Box Shuffle muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
