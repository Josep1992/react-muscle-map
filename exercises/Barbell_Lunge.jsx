import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Lunge"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseBarbellLungeMuscleMap({ title = "Barbell Lunge muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
