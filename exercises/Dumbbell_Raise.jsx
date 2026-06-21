import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["biceps"])

export default function ExerciseDumbbellRaiseMuscleMap({ title = "Dumbbell Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
