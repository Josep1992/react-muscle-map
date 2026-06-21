import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Power_Partials"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExercisePowerPartialsMuscleMap({ title = "Power Partials muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
