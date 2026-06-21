import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Jerk_Balance"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings","quadriceps","triceps"])

export default function ExerciseJerkBalanceMuscleMap({ title = "Jerk Balance muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
