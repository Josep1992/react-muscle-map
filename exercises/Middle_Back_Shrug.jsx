import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Middle_Back_Shrug"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseMiddleBackShrugMuscleMap({ title = "Middle Back Shrug muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
