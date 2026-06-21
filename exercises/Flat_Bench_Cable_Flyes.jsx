import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Flat_Bench_Cable_Flyes"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseFlatBenchCableFlyesMuscleMap({ title = "Flat Bench Cable Flyes muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
