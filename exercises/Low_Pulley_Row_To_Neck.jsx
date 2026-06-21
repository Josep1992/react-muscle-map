import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Low_Pulley_Row_To_Neck"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["biceps","middle back","traps"])

export default function ExerciseLowPulleyRowToNeckMuscleMap({ title = "Low Pulley Row To Neck muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
