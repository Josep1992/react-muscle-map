import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Dumbbell_Flyes"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseInclineDumbbellFlyesMuscleMap({ title = "Incline Dumbbell Flyes muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
