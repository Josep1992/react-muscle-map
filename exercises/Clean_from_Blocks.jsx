import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Clean_from_Blocks"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","shoulders","traps"])

export default function ExerciseCleanFromBlocksMuscleMap({ title = "Clean from Blocks muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
