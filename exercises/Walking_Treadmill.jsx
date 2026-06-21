import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Walking_Treadmill"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseWalkingTreadmillMuscleMap({ title = "Walking, Treadmill muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
