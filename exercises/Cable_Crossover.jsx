import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Crossover"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseCableCrossoverMuscleMap({ title = "Cable Crossover muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
