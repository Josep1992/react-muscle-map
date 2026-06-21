import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kneeling_Single-Arm_High_Pulley_Row"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back"])

export default function ExerciseKneelingSingleArmHighPulleyRowMuscleMap({ title = "Kneeling Single-Arm High Pulley Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
