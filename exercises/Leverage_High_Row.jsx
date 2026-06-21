import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Leverage_High_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["lats"])

export default function ExerciseLeverageHighRowMuscleMap({ title = "Leverage High Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
