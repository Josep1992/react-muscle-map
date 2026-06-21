import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Runners_Stretch"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves"])

export default function ExerciseRunnersStretchMuscleMap({ title = "Runner's Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
