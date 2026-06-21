import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Alternate_Incline_Dumbbell_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseAlternateInclineDumbbellCurlMuscleMap({ title = "Alternate Incline Dumbbell Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
