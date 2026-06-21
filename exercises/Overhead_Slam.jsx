import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Overhead_Slam"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseOverheadSlamMuscleMap({ title = "Overhead Slam muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
