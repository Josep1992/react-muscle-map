import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","lower back"])

export default function ExerciseBarbellSquatMuscleMap({ title = "Barbell Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
