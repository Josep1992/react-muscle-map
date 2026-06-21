import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Prone_Manual_Hamstring"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseProneManualHamstringMuscleMap({ title = "Prone Manual Hamstring muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
