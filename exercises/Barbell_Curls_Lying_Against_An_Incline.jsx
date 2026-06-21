import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Curls_Lying_Against_An_Incline"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseBarbellCurlsLyingAgainstAnInclineMuscleMap({ title = "Barbell Curls Lying Against An Incline muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
