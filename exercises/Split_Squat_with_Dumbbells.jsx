import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Split_Squat_with_Dumbbells"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings"])

export default function ExerciseSplitSquatWithDumbbellsMuscleMap({ title = "Split Squat with Dumbbells muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
