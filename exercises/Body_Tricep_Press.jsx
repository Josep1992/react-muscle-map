import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Body_Tricep_Press"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseBodyTricepPressMuscleMap({ title = "Body Tricep Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
