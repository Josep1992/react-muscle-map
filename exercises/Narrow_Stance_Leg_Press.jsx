import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Narrow_Stance_Leg_Press"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseNarrowStanceLegPressMuscleMap({ title = "Narrow Stance Leg Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
