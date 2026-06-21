import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Leg_Curl"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedLegCurlMuscleMap({ title = "Seated Leg Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
