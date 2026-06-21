import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Inner-Biceps_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingInnerBicepsCurlMuscleMap({ title = "Standing Inner-Biceps Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
