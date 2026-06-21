import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Groiners"
export const primaryMuscles = Object.freeze(["adductors"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseGroinersMuscleMap({ title = "Groiners muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
