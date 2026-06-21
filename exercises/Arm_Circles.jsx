import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Arm_Circles"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["traps"])

export default function ExerciseArmCirclesMuscleMap({ title = "Arm Circles muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
