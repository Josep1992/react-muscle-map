import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bottoms_Up"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseBottomsUpMuscleMap({ title = "Bottoms Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
