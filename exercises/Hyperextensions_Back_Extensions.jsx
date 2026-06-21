import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hyperextensions_Back_Extensions"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings"])

export default function ExerciseHyperextensionsBackExtensionsMuscleMap({ title = "Hyperextensions (Back Extensions) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
