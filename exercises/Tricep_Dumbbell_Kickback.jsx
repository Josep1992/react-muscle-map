import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Tricep_Dumbbell_Kickback"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseTricepDumbbellKickbackMuscleMap({ title = "Tricep Dumbbell Kickback muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
