import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Wind_Sprints"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseWindSprintsMuscleMap({ title = "Wind Sprints muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
