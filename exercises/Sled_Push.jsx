import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Sled_Push"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","chest","glutes","hamstrings","triceps"])

export default function ExerciseSledPushMuscleMap({ title = "Sled Push muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
