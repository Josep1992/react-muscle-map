import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Push-Up_Medium"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["abdominals","shoulders","triceps"])

export default function ExerciseInclinePushUpMediumMuscleMap({ title = "Incline Push-Up Medium muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
