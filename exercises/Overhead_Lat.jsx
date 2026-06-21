import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Overhead_Lat"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseOverheadLatMuscleMap({ title = "Overhead Lat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
