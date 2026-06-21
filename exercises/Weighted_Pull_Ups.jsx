import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Weighted_Pull_Ups"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back"])

export default function ExerciseWeightedPullUpsMuscleMap({ title = "Weighted Pull Ups muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
