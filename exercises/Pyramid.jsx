import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Pyramid"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExercisePyramidMuscleMap({ title = "Pyramid muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
