import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Sit_Squats"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","glutes","hamstrings"])

export default function ExerciseSitSquatsMuscleMap({ title = "Sit Squats muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
