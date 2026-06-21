import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Rear_Lunge"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseDumbbellRearLungeMuscleMap({ title = "Dumbbell Rear Lunge muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
