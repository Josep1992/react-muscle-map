import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Close-Grip_Concentration_Barbell_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedCloseGripConcentrationBarbellCurlMuscleMap({ title = "Seated Close-Grip Concentration Barbell Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
