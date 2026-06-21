import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Triceps_Stretch"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["lats"])

export default function ExerciseTricepsStretchMuscleMap({ title = "Triceps Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
