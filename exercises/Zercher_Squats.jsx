import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Zercher_Squats"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseZercherSquatsMuscleMap({ title = "Zercher Squats muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
