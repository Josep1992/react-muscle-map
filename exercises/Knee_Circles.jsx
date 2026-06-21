import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Knee_Circles"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze(["hamstrings","quadriceps"])

export default function ExerciseKneeCirclesMuscleMap({ title = "Knee Circles muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
