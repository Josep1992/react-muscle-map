import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Suspended_Push-Up"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseSuspendedPushUpMuscleMap({ title = "Suspended Push-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
