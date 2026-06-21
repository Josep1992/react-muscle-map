import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Split_Squats"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes","quadriceps"])

export default function ExerciseSplitSquatsMuscleMap({ title = "Split Squats muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
