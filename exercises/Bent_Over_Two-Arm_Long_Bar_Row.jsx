import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bent_Over_Two-Arm_Long_Bar_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats"])

export default function ExerciseBentOverTwoArmLongBarRowMuscleMap({ title = "Bent Over Two-Arm Long Bar Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
