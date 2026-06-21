import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_Seated_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseKettlebellSeatedPressMuscleMap({ title = "Kettlebell Seated Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
