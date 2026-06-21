import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Box_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["adductors","calves","glutes","hamstrings","lower back"])

export default function ExerciseBoxSquatMuscleMap({ title = "Box Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
