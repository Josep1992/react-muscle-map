import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Trail_Running_Walking"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseTrailRunningWalkingMuscleMap({ title = "Trail Running/Walking muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
