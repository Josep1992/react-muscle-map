import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Mountain_Climbers"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["chest","hamstrings","shoulders"])

export default function ExerciseMountainClimbersMuscleMap({ title = "Mountain Climbers muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
