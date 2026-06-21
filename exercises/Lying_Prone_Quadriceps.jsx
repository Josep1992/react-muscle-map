import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Prone_Quadriceps"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingProneQuadricepsMuscleMap({ title = "Lying Prone Quadriceps muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
