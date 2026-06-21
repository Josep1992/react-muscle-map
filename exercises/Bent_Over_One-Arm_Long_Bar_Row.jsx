import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bent_Over_One-Arm_Long_Bar_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats","lower back","traps"])

export default function ExerciseBentOverOneArmLongBarRowMuscleMap({ title = "Bent Over One-Arm Long Bar Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
