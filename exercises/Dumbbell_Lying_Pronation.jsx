import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Lying_Pronation"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDumbbellLyingPronationMuscleMap({ title = "Dumbbell Lying Pronation muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
