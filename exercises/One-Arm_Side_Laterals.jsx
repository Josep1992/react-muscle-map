import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Side_Laterals"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseOneArmSideLateralsMuscleMap({ title = "One-Arm Side Laterals muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
