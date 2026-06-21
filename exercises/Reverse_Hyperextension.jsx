import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Hyperextension"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes"])

export default function ExerciseReverseHyperextensionMuscleMap({ title = "Reverse Hyperextension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
