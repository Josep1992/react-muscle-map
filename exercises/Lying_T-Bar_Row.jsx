import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_T-Bar_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats"])

export default function ExerciseLyingTBarRowMuscleMap({ title = "Lying T-Bar Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
