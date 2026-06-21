import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Push-Up_Depth_Jump"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseInclinePushUpDepthJumpMuscleMap({ title = "Incline Push-Up Depth Jump muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
