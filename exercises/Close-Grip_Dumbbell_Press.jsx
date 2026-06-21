import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Close-Grip_Dumbbell_Press"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseCloseGripDumbbellPressMuscleMap({ title = "Close-Grip Dumbbell Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
