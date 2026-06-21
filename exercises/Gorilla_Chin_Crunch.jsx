import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Gorilla_Chin_Crunch"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["biceps","lats"])

export default function ExerciseGorillaChinCrunchMuscleMap({ title = "Gorilla Chin/Crunch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
