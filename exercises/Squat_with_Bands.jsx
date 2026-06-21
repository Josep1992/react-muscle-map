import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Squat_with_Bands"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["adductors","calves","glutes","hamstrings","lower back"])

export default function ExerciseSquatWithBandsMuscleMap({ title = "Squat with Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
