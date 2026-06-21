import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Squat_To_A_Bench"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","lower back"])

export default function ExerciseDumbbellSquatToABenchMuscleMap({ title = "Dumbbell Squat To A Bench muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
