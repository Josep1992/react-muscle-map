import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Decline_Dumbbell_Flyes"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDeclineDumbbellFlyesMuscleMap({ title = "Decline Dumbbell Flyes muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
