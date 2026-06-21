import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rhomboids-SMR"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["traps"])

export default function ExerciseRhomboidsSMRMuscleMap({ title = "Rhomboids-SMR muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
