import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Close-Grip_Standing_Barbell_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseCloseGripStandingBarbellCurlMuscleMap({ title = "Close-Grip Standing Barbell Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
