import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Crunch_-_Hands_Overhead"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCrunchHandsOverheadMuscleMap({ title = "Crunch - Hands Overhead muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
