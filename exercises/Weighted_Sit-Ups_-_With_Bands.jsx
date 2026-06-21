import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Weighted_Sit-Ups_-_With_Bands"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseWeightedSitUpsWithBandsMuscleMap({ title = "Weighted Sit-Ups - With Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
