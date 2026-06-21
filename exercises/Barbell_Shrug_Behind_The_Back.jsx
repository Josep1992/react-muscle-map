import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Shrug_Behind_The_Back"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze(["forearms","middle back"])

export default function ExerciseBarbellShrugBehindTheBackMuscleMap({ title = "Barbell Shrug Behind The Back muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
