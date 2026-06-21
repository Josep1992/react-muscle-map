import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Single-Arm_Linear_Jammer"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["chest","triceps"])

export default function ExerciseSingleArmLinearJammerMuscleMap({ title = "Single-Arm Linear Jammer muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
