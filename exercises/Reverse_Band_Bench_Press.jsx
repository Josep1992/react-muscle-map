import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Band_Bench_Press"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","forearms","lats","middle back","shoulders"])

export default function ExerciseReverseBandBenchPressMuscleMap({ title = "Reverse Band Bench Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
