import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Parallel_Bar_Dip"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseParallelBarDipMuscleMap({ title = "Parallel Bar Dip muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
