import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Snatch_Shrug"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze(["forearms","shoulders"])

export default function ExerciseSnatchShrugMuscleMap({ title = "Snatch Shrug muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
