import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rear_Leg_Raises"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseRearLegRaisesMuscleMap({ title = "Rear Leg Raises muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
