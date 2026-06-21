import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_One-Arm_Dumbbell_Palms-Down_Wrist_Curl"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedOneArmDumbbellPalmsDownWristCurlMuscleMap({ title = "Seated One-Arm Dumbbell Palms-Down Wrist Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
