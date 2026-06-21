import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Middle_Back_Stretch"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["abdominals","lats","lower back"])

export default function ExerciseMiddleBackStretchMuscleMap({ title = "Middle Back Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
