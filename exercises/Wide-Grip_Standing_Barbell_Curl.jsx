import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Wide-Grip_Standing_Barbell_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseWideGripStandingBarbellCurlMuscleMap({ title = "Wide-Grip Standing Barbell Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
