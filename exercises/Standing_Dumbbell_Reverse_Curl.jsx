import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Dumbbell_Reverse_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseStandingDumbbellReverseCurlMuscleMap({ title = "Standing Dumbbell Reverse Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
