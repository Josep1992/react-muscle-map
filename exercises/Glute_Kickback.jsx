import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Glute_Kickback"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["hamstrings"])

export default function ExerciseGluteKickbackMuscleMap({ title = "Glute Kickback muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
