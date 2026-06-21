import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Peroneals_Stretch"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExercisePeronealsStretchMuscleMap({ title = "Peroneals Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
