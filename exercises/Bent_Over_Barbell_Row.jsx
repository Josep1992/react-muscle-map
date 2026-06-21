import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bent_Over_Barbell_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats","shoulders"])

export default function ExerciseBentOverBarbellRowMuscleMap({ title = "Bent Over Barbell Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
