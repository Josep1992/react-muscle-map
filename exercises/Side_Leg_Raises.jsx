import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Side_Leg_Raises"
export const primaryMuscles = Object.freeze(["adductors"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSideLegRaisesMuscleMap({ title = "Side Leg Raises muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
