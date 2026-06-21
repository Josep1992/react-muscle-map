import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Front_Squat_Clean_Grip"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abdominals","glutes","hamstrings"])

export default function ExerciseFrontSquatCleanGripMuscleMap({ title = "Front Squat (Clean Grip) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
