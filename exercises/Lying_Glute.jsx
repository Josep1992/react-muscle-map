import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Glute"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["abductors"])

export default function ExerciseLyingGluteMuscleMap({ title = "Lying Glute muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
