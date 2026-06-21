import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Walking_Lunge"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseBarbellWalkingLungeMuscleMap({ title = "Barbell Walking Lunge muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
