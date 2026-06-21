import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Power_Jerk"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abdominals","calves","glutes","hamstrings","shoulders","triceps"])

export default function ExercisePowerJerkMuscleMap({ title = "Power Jerk muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
