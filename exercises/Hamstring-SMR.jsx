import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hamstring-SMR"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseHamstringSMRMuscleMap({ title = "Hamstring-SMR muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
