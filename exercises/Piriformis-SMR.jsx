import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Piriformis-SMR"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze([])

export default function ExercisePiriformisSMRMuscleMap({ title = "Piriformis-SMR muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
