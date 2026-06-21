import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Side-Lying_Floor_Stretch"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSideLyingFloorStretchMuscleMap({ title = "Side-Lying Floor Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
