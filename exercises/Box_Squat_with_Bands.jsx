import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Box_Squat_with_Bands"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","glutes","hamstrings","lower back"])

export default function ExerciseBoxSquatWithBandsMuscleMap({ title = "Box Squat with Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
