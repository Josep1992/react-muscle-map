import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Push-Up_Close-Grip"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseInclinePushUpCloseGripMuscleMap({ title = "Incline Push-Up Close-Grip muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
