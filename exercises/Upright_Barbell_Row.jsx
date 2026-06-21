import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Upright_Barbell_Row"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["traps"])

export default function ExerciseUprightBarbellRowMuscleMap({ title = "Upright Barbell Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
