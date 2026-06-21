import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Lying_Supination"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDumbbellLyingSupinationMuscleMap({ title = "Dumbbell Lying Supination muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
