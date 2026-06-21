import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bodyweight_Mid_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats"])

export default function ExerciseBodyweightMidRowMuscleMap({ title = "Bodyweight Mid Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
