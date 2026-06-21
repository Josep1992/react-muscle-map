import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Depth_Jump_Leap"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","glutes","hamstrings"])

export default function ExerciseDepthJumpLeapMuscleMap({ title = "Depth Jump Leap muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
