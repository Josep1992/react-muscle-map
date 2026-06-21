import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Balance_Board"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze(["hamstrings","quadriceps"])

export default function ExerciseBalanceBoardMuscleMap({ title = "Balance Board muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
