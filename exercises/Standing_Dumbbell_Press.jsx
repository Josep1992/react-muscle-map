import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Dumbbell_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseStandingDumbbellPressMuscleMap({ title = "Standing Dumbbell Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
