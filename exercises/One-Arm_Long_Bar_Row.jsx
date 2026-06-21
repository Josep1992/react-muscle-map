import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Long_Bar_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats"])

export default function ExerciseOneArmLongBarRowMuscleMap({ title = "One-Arm Long Bar Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
