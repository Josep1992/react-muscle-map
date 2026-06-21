import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Leg-Up_Hamstring_Stretch"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLegUpHamstringStretchMuscleMap({ title = "Leg-Up Hamstring Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
