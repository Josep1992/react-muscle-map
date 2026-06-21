import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Upright_Cable_Row"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseUprightCableRowMuscleMap({ title = "Upright Cable Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
