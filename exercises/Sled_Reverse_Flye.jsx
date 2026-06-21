import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Sled_Reverse_Flye"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSledReverseFlyeMuscleMap({ title = "Sled Reverse Flye muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
