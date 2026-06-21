import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Seated_Box_Jump"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseDumbbellSeatedBoxJumpMuscleMap({ title = "Dumbbell Seated Box Jump muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
