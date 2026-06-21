import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Legged_Cable_Kickback"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["hamstrings"])

export default function ExerciseOneLeggedCableKickbackMuscleMap({ title = "One-Legged Cable Kickback muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
