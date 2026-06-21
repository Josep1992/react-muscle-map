import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Quadriceps-SMR"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseQuadricepsSMRMuscleMap({ title = "Quadriceps-SMR muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
