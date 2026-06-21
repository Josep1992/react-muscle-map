import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Overhead_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abdominals","calves","glutes","hamstrings","lower back","shoulders","triceps"])

export default function ExerciseOverheadSquatMuscleMap({ title = "Overhead Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
