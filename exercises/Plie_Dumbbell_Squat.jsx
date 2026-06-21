import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Plie_Dumbbell_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abdominals","calves","glutes","hamstrings"])

export default function ExercisePlieDumbbellSquatMuscleMap({ title = "Plie Dumbbell Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
