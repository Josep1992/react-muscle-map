import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Two-Arm_Palms-Up_Low-Pulley_Wrist_Curl"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedTwoArmPalmsUpLowPulleyWristCurlMuscleMap({ title = "Seated Two-Arm Palms-Up Low-Pulley Wrist Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
