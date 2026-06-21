import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Squat_To_A_Bench"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","lower back"])

export default function ExerciseBarbellSquatToABenchMuscleMap({ title = "Barbell Squat To A Bench muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
