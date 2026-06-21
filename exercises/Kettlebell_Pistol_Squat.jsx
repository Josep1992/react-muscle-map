import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_Pistol_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","shoulders"])

export default function ExerciseKettlebellPistolSquatMuscleMap({ title = "Kettlebell Pistol Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
