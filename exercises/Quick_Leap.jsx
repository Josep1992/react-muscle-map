import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Quick_Leap"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","hamstrings"])

export default function ExerciseQuickLeapMuscleMap({ title = "Quick Leap muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
