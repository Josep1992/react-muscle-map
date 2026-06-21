import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Push_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["quadriceps","triceps"])

export default function ExercisePushPressMuscleMap({ title = "Push Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
