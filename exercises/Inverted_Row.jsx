import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Inverted_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["lats"])

export default function ExerciseInvertedRowMuscleMap({ title = "Inverted Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
