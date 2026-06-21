import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Side_Lying_Groin_Stretch"
export const primaryMuscles = Object.freeze(["adductors"])
export const secondaryMuscles = Object.freeze(["hamstrings"])

export default function ExerciseSideLyingGroinStretchMuscleMap({ title = "Side Lying Groin Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
