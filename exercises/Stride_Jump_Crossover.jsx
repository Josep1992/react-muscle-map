import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Stride_Jump_Crossover"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","hamstrings"])

export default function ExerciseStrideJumpCrossoverMuscleMap({ title = "Stride Jump Crossover muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
