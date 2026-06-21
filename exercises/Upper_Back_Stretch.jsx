import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Upper_Back_Stretch"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["middle back"])

export default function ExerciseUpperBackStretchMuscleMap({ title = "Upper Back Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
