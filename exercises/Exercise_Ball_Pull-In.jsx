import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Exercise_Ball_Pull-In"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseExerciseBallPullInMuscleMap({ title = "Exercise Ball Pull-In muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
