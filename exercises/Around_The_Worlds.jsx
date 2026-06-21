import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Around_The_Worlds"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseAroundTheWorldsMuscleMap({ title = "Around The Worlds muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
