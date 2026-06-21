import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Crunch_-_Legs_On_Exercise_Ball"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCrunchLegsOnExerciseBallMuscleMap({ title = "Crunch - Legs On Exercise Ball muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
