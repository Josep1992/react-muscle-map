import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Cable_Rows"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats","shoulders"])

export default function ExerciseSeatedCableRowsMuscleMap({ title = "Seated Cable Rows muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
