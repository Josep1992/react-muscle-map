import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bent_Over_Two-Dumbbell_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats","shoulders"])

export default function ExerciseBentOverTwoDumbbellRowMuscleMap({ title = "Bent Over Two-Dumbbell Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
