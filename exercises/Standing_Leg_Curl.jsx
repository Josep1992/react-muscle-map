import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Leg_Curl"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingLegCurlMuscleMap({ title = "Standing Leg Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
