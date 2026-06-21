import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Close-Grip_Barbell_Bench_Press"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseCloseGripBarbellBenchPressMuscleMap({ title = "Close-Grip Barbell Bench Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
