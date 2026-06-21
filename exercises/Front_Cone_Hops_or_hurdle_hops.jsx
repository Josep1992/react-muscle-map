import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Front_Cone_Hops_or_hurdle_hops"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","glutes","hamstrings"])

export default function ExerciseFrontConeHopsOrHurdleHopsMuscleMap({ title = "Front Cone Hops (or hurdle hops) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
