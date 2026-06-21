import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Snatch_Balance"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","shoulders","triceps"])

export default function ExerciseSnatchBalanceMuscleMap({ title = "Snatch Balance muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
