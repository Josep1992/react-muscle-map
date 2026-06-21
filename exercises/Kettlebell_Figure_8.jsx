import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_Figure_8"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["hamstrings","shoulders"])

export default function ExerciseKettlebellFigure8MuscleMap({ title = "Kettlebell Figure 8 muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
