import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hyperextensions_With_No_Hyperextension_Bench"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings"])

export default function ExerciseHyperextensionsWithNoHyperextensionBenchMuscleMap({ title = "Hyperextensions With No Hyperextension Bench muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
