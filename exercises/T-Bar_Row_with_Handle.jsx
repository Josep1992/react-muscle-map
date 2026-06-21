import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "T-Bar_Row_with_Handle"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats"])

export default function ExerciseTBarRowWithHandleMuscleMap({ title = "T-Bar Row with Handle muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
