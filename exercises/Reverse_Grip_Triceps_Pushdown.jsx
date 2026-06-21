import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Grip_Triceps_Pushdown"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseReverseGripTricepsPushdownMuscleMap({ title = "Reverse Grip Triceps Pushdown muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
