import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Linear_Depth_Jump"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseLinearDepthJumpMuscleMap({ title = "Linear Depth Jump muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
