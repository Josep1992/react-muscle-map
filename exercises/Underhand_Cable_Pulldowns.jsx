import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Underhand_Cable_Pulldowns"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back","shoulders"])

export default function ExerciseUnderhandCablePulldownsMuscleMap({ title = "Underhand Cable Pulldowns muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
