import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Speed_Band_Overhead_Triceps"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSpeedBandOverheadTricepsMuscleMap({ title = "Speed Band Overhead Triceps muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
