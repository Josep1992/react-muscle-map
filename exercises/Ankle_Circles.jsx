import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Ankle_Circles"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseAnkleCirclesMuscleMap({ title = "Ankle Circles muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
