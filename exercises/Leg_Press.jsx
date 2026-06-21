import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Leg_Press"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseLegPressMuscleMap({ title = "Leg Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
