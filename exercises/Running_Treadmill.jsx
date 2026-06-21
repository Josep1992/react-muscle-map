import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Running_Treadmill"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseRunningTreadmillMuscleMap({ title = "Running, Treadmill muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
