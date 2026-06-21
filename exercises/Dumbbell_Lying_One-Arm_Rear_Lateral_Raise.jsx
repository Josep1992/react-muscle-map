import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Lying_One-Arm_Rear_Lateral_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["middle back"])

export default function ExerciseDumbbellLyingOneArmRearLateralRaiseMuscleMap({ title = "Dumbbell Lying One-Arm Rear Lateral Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
