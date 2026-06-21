import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Chain_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseChainPressMuscleMap({ title = "Chain Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
