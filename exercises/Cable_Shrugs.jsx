import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Shrugs"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableShrugsMuscleMap({ title = "Cable Shrugs muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
