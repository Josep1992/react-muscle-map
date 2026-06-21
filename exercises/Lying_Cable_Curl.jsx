import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Cable_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingCableCurlMuscleMap({ title = "Lying Cable Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
