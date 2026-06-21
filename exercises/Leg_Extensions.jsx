import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Leg_Extensions"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLegExtensionsMuscleMap({ title = "Leg Extensions muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
