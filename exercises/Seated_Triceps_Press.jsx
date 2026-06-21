import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Triceps_Press"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedTricepsPressMuscleMap({ title = "Seated Triceps Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
