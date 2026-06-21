import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Straight_Raises_on_Incline_Bench"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["traps"])

export default function ExerciseStraightRaisesOnInclineBenchMuscleMap({ title = "Straight Raises on Incline Bench muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
