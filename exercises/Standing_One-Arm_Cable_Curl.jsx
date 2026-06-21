import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_One-Arm_Cable_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingOneArmCableCurlMuscleMap({ title = "Standing One-Arm Cable Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
