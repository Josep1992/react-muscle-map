import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Front_Box_Jump"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","glutes","quadriceps"])

export default function ExerciseFrontBoxJumpMuscleMap({ title = "Front Box Jump muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
