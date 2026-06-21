import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Arnold_Dumbbell_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseArnoldDumbbellPressMuscleMap({ title = "Arnold Dumbbell Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
