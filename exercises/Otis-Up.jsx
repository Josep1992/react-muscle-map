import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Otis-Up"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["chest","shoulders","triceps"])

export default function ExerciseOtisUpMuscleMap({ title = "Otis-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
