import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Pull_Through"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["hamstrings","lower back"])

export default function ExercisePullThroughMuscleMap({ title = "Pull Through muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
