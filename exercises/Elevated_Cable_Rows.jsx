import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Elevated_Cable_Rows"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["middle back","traps"])

export default function ExerciseElevatedCableRowsMuscleMap({ title = "Elevated Cable Rows muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
