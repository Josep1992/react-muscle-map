import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_One-Arm_Lateral_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingOneArmLateralRaiseMuscleMap({ title = "Lying One-Arm Lateral Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
