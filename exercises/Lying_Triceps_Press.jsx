import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Triceps_Press"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingTricepsPressMuscleMap({ title = "Lying Triceps Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
