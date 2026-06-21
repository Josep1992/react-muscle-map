import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Flat_Bench_Leg_Pull-In"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseFlatBenchLegPullInMuscleMap({ title = "Flat Bench Leg Pull-In muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
