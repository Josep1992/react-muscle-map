import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "90_90_Hamstring"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves"])

export default function Exercise9090HamstringMuscleMap({ title = "90/90 Hamstring muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
