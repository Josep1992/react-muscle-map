import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One_Leg_Barbell_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseOneLegBarbellSquatMuscleMap({ title = "One Leg Barbell Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
