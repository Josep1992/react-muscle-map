import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Biceps"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseSeatedBicepsMuscleMap({ title = "Seated Biceps muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
