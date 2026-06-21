import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Superman"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings"])

export default function ExerciseSupermanMuscleMap({ title = "Superman muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
