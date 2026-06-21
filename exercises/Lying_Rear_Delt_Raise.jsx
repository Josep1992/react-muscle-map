import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Rear_Delt_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingRearDeltRaiseMuscleMap({ title = "Lying Rear Delt Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
