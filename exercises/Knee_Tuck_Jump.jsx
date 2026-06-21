import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Knee_Tuck_Jump"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","glutes","quadriceps"])

export default function ExerciseKneeTuckJumpMuscleMap({ title = "Knee Tuck Jump muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
