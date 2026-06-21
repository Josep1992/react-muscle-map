import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Split_Jerk"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings","shoulders","triceps"])

export default function ExerciseSplitJerkMuscleMap({ title = "Split Jerk muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
