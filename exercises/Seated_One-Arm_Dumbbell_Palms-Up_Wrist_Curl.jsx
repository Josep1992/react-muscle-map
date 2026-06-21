import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_One-Arm_Dumbbell_Palms-Up_Wrist_Curl"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedOneArmDumbbellPalmsUpWristCurlMuscleMap({ title = "Seated One-Arm Dumbbell Palms-Up Wrist Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
