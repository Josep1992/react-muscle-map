import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Leverage_Shrug"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseLeverageShrugMuscleMap({ title = "Leverage Shrug muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
