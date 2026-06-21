import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Windmills"
export const primaryMuscles = Object.freeze(["abductors"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings","lower back"])

export default function ExerciseWindmillsMuscleMap({ title = "Windmills muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
