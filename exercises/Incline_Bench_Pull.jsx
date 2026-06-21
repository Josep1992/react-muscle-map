import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Bench_Pull"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["lats","shoulders"])

export default function ExerciseInclineBenchPullMuscleMap({ title = "Incline Bench Pull muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
