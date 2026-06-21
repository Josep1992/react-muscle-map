import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Overhead_Triceps"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["lats"])

export default function ExerciseOverheadTricepsMuscleMap({ title = "Overhead Triceps muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
