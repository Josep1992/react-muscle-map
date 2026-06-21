import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Front_Leg_Raises"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseFrontLegRaisesMuscleMap({ title = "Front Leg Raises muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
