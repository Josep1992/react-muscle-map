import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lateral_Bound"
export const primaryMuscles = Object.freeze(["adductors"])
export const secondaryMuscles = Object.freeze(["abductors","calves","glutes","hamstrings","quadriceps"])

export default function ExerciseLateralBoundMuscleMap({ title = "Lateral Bound muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
