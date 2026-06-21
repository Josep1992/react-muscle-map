import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Clean_Shrug"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze(["forearms","shoulders"])

export default function ExerciseCleanShrugMuscleMap({ title = "Clean Shrug muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
