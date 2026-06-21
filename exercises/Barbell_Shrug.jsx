import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Shrug"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseBarbellShrugMuscleMap({ title = "Barbell Shrug muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
