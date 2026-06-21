import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Wide_Stance_Barbell_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","lower back"])

export default function ExerciseWideStanceBarbellSquatMuscleMap({ title = "Wide Stance Barbell Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
