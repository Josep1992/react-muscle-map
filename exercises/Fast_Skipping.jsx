import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Fast_Skipping"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","glutes","hamstrings"])

export default function ExerciseFastSkippingMuscleMap({ title = "Fast Skipping muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
