import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Weighted_Ball_Hyperextension"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings","middle back"])

export default function ExerciseWeightedBallHyperextensionMuscleMap({ title = "Weighted Ball Hyperextension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
