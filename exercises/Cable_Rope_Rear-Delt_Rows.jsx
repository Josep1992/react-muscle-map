import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Rope_Rear-Delt_Rows"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["biceps","middle back"])

export default function ExerciseCableRopeRearDeltRowsMuscleMap({ title = "Cable Rope Rear-Delt Rows muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
