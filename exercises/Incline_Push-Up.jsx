import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Push-Up"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseInclinePushUpMuscleMap({ title = "Incline Push-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
