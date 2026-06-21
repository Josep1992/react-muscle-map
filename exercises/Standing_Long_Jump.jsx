import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Long_Jump"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseStandingLongJumpMuscleMap({ title = "Standing Long Jump muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
