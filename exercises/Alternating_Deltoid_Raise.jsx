import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Alternating_Deltoid_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseAlternatingDeltoidRaiseMuscleMap({ title = "Alternating Deltoid Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
