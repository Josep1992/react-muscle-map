import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lunge_Sprint"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseLungeSprintMuscleMap({ title = "Lunge Sprint muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
