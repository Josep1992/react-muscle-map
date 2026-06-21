import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Romanian_Deadlift"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes","lower back"])

export default function ExerciseRomanianDeadliftMuscleMap({ title = "Romanian Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
