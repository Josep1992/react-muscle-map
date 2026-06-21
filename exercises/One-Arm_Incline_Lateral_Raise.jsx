import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Incline_Lateral_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseOneArmInclineLateralRaiseMuscleMap({ title = "One-Arm Incline Lateral Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
