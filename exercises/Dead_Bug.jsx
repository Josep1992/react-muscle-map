import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dead_Bug"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDeadBugMuscleMap({ title = "Dead Bug muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
