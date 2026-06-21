import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Glute"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["adductors"])

export default function ExerciseSeatedGluteMuscleMap({ title = "Seated Glute muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
