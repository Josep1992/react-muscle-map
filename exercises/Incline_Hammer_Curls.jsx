import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Hammer_Curls"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseInclineHammerCurlsMuscleMap({ title = "Incline Hammer Curls muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
