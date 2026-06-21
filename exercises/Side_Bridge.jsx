import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Side_Bridge"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseSideBridgeMuscleMap({ title = "Side Bridge muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
