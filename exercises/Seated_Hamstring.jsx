import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Hamstring"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves"])

export default function ExerciseSeatedHamstringMuscleMap({ title = "Seated Hamstring muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
