import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Rear_Delt_Fly"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableRearDeltFlyMuscleMap({ title = "Cable Rear Delt Fly muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
