import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Flyes"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseReverseFlyesMuscleMap({ title = "Reverse Flyes muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
