import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Leg_Curls"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingLegCurlsMuscleMap({ title = "Lying Leg Curls muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
