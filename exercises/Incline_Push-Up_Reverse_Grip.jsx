import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Push-Up_Reverse_Grip"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["abdominals","shoulders","triceps"])

export default function ExerciseInclinePushUpReverseGripMuscleMap({ title = "Incline Push-Up Reverse Grip muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
