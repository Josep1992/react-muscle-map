import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lateral_Cone_Hops"
export const primaryMuscles = Object.freeze(["adductors"])
export const secondaryMuscles = Object.freeze(["abductors","calves","glutes","hamstrings","quadriceps"])

export default function ExerciseLateralConeHopsMuscleMap({ title = "Lateral Cone Hops muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
