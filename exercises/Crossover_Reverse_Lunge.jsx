import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Crossover_Reverse_Lunge"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["abdominals","abductors","glutes","hamstrings","quadriceps"])

export default function ExerciseCrossoverReverseLungeMuscleMap({ title = "Crossover Reverse Lunge muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
