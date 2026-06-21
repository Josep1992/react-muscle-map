import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Dumbbell_Palms-Up_Wrist_Curl"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedDumbbellPalmsUpWristCurlMuscleMap({ title = "Seated Dumbbell Palms-Up Wrist Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
