import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Straight_Bar_Bench_Mid_Rows"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats"])

export default function ExerciseStraightBarBenchMidRowsMuscleMap({ title = "Straight Bar Bench Mid Rows muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
