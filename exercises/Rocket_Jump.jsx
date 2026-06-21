import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rocket_Jump"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","hamstrings"])

export default function ExerciseRocketJumpMuscleMap({ title = "Rocket Jump muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
