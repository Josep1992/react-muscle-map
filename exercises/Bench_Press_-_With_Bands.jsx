import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bench_Press_-_With_Bands"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseBenchPressWithBandsMuscleMap({ title = "Bench Press - With Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
