import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Palm-Up_Barbell_Wrist_Curl"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedPalmUpBarbellWristCurlMuscleMap({ title = "Seated Palm-Up Barbell Wrist Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
