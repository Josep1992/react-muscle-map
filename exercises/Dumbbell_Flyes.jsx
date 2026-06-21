import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Flyes"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDumbbellFlyesMuscleMap({ title = "Dumbbell Flyes muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
