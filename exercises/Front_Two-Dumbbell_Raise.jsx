import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Front_Two-Dumbbell_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseFrontTwoDumbbellRaiseMuscleMap({ title = "Front Two-Dumbbell Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
