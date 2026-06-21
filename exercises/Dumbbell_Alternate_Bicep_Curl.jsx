import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Alternate_Bicep_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseDumbbellAlternateBicepCurlMuscleMap({ title = "Dumbbell Alternate Bicep Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
