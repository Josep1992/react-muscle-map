import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Band_Deadlift"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","glutes","hamstrings","quadriceps"])

export default function ExerciseReverseBandDeadliftMuscleMap({ title = "Reverse Band Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
