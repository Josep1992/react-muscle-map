import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Narrow_Stance_Squats"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","lower back"])

export default function ExerciseNarrowStanceSquatsMuscleMap({ title = "Narrow Stance Squats muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
