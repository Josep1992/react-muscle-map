import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Jogging_Treadmill"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings"])

export default function ExerciseJoggingTreadmillMuscleMap({ title = "Jogging, Treadmill muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
