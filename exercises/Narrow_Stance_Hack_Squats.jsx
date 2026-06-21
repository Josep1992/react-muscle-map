import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Narrow_Stance_Hack_Squats"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseNarrowStanceHackSquatsMuscleMap({ title = "Narrow Stance Hack Squats muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
