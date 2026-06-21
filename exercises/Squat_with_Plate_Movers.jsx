import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Squat_with_Plate_Movers"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","glutes","hamstrings"])

export default function ExerciseSquatWithPlateMoversMuscleMap({ title = "Squat with Plate Movers muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
