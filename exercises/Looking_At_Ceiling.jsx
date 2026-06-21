import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Looking_At_Ceiling"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLookingAtCeilingMuscleMap({ title = "Looking At Ceiling muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
