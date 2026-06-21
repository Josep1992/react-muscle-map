import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Flat_Bench_Lying_Leg_Raise"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseFlatBenchLyingLegRaiseMuscleMap({ title = "Flat Bench Lying Leg Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
