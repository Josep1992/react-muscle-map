import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Frog_Sit-Ups"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseFrogSitUpsMuscleMap({ title = "Frog Sit-Ups muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
