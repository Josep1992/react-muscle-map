import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Incline_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","forearms","lats","shoulders"])

export default function ExerciseDumbbellInclineRowMuscleMap({ title = "Dumbbell Incline Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
