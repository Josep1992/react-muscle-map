import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Alternating_Kettlebell_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats"])

export default function ExerciseAlternatingKettlebellRowMuscleMap({ title = "Alternating Kettlebell Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
