import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Triceps_Bench_Press"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseReverseTricepsBenchPressMuscleMap({ title = "Reverse Triceps Bench Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
