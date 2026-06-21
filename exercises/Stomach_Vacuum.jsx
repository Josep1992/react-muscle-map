import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Stomach_Vacuum"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStomachVacuumMuscleMap({ title = "Stomach Vacuum muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
