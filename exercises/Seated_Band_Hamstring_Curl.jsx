import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Band_Hamstring_Curl"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedBandHamstringCurlMuscleMap({ title = "Seated Band Hamstring Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
