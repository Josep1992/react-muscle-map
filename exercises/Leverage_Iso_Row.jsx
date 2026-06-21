import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Leverage_Iso_Row"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back"])

export default function ExerciseLeverageIsoRowMuscleMap({ title = "Leverage Iso Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
