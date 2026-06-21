import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Hip_Adduction"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableHipAdductionMuscleMap({ title = "Cable Hip Adduction muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
