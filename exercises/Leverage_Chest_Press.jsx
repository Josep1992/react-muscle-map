import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Leverage_Chest_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseLeverageChestPressMuscleMap({ title = "Leverage Chest Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
