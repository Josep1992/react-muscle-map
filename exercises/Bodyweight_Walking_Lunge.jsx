import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bodyweight_Walking_Lunge"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseBodyweightWalkingLungeMuscleMap({ title = "Bodyweight Walking Lunge muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
