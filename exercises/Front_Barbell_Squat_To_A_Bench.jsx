import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Front_Barbell_Squat_To_A_Bench"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseFrontBarbellSquatToABenchMuscleMap({ title = "Front Barbell Squat To A Bench muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
