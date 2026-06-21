import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Shrug"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDumbbellShrugMuscleMap({ title = "Dumbbell Shrug muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
