import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Upward_Stretch"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["chest","lats"])

export default function ExerciseUpwardStretchMuscleMap({ title = "Upward Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
