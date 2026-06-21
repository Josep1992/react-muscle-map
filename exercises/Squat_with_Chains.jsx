import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Squat_with_Chains"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["adductors","calves","glutes","hamstrings","lower back"])

export default function ExerciseSquatWithChainsMuscleMap({ title = "Squat with Chains muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
