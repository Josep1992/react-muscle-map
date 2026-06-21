import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Exercise_Ball_Crunch"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseExerciseBallCrunchMuscleMap({ title = "Exercise Ball Crunch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
