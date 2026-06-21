import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Inner_Biceps_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseInclineInnerBicepsCurlMuscleMap({ title = "Incline Inner Biceps Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
