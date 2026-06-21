import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Lunges"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseDumbbellLungesMuscleMap({ title = "Dumbbell Lunges muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
