import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Weighted_Crunches"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseWeightedCrunchesMuscleMap({ title = "Weighted Crunches muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
