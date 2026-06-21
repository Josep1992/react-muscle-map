import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One_Arm_Chin-Up"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","forearms","lats"])

export default function ExerciseOneArmChinUpMuscleMap({ title = "One Arm Chin-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
