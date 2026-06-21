import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "EZ-Bar_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseEZBarCurlMuscleMap({ title = "EZ-Bar Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
