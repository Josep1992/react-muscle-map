import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Inverted_Row_with_Straps"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats"])

export default function ExerciseInvertedRowWithStrapsMuscleMap({ title = "Inverted Row with Straps muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
