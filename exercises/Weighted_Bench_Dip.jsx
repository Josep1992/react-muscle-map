import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Weighted_Bench_Dip"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseWeightedBenchDipMuscleMap({ title = "Weighted Bench Dip muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
