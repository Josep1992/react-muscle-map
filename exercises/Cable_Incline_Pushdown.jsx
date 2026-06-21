import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Incline_Pushdown"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableInclinePushdownMuscleMap({ title = "Cable Incline Pushdown muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
