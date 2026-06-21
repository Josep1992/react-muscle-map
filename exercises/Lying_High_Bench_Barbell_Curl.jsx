import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_High_Bench_Barbell_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingHighBenchBarbellCurlMuscleMap({ title = "Lying High Bench Barbell Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
