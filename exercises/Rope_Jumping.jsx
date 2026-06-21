import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rope_Jumping"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","hamstrings"])

export default function ExerciseRopeJumpingMuscleMap({ title = "Rope Jumping muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
