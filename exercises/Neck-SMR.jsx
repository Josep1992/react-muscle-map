import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Neck-SMR"
export const primaryMuscles = Object.freeze(["neck"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseNeckSMRMuscleMap({ title = "Neck-SMR muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
