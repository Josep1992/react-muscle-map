import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Concentration_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseStandingConcentrationCurlMuscleMap({ title = "Standing Concentration Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
