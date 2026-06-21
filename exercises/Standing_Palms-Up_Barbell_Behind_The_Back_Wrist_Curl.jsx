import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Palms-Up_Barbell_Behind_The_Back_Wrist_Curl"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingPalmsUpBarbellBehindTheBackWristCurlMuscleMap({ title = "Standing Palms-Up Barbell Behind The Back Wrist Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
