import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Cambered_Barbell_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats","traps"])

export default function ExerciseLyingCamberedBarbellRowMuscleMap({ title = "Lying Cambered Barbell Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
