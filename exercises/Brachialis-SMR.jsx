import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Brachialis-SMR"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseBrachialisSMRMuscleMap({ title = "Brachialis-SMR muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
