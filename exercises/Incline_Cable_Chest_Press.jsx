import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Cable_Chest_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseInclineCableChestPressMuscleMap({ title = "Incline Cable Chest Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
