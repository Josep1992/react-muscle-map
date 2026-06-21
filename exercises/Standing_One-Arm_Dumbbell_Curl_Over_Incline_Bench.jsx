import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_One-Arm_Dumbbell_Curl_Over_Incline_Bench"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingOneArmDumbbellCurlOverInclineBenchMuscleMap({ title = "Standing One-Arm Dumbbell Curl Over Incline Bench muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
