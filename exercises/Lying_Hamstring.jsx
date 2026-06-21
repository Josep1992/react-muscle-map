import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Hamstring"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves"])

export default function ExerciseLyingHamstringMuscleMap({ title = "Lying Hamstring muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
