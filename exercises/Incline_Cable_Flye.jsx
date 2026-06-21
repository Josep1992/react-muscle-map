import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Cable_Flye"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseInclineCableFlyeMuscleMap({ title = "Incline Cable Flye muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
