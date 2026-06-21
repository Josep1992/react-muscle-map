import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Crossover"
export const primaryMuscles = Object.freeze(["abductors"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingCrossoverMuscleMap({ title = "Lying Crossover muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
