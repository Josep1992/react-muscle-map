import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Tricep_Side_Stretch"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseTricepSideStretchMuscleMap({ title = "Tricep Side Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
