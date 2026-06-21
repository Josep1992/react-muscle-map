import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Decline_Barbell_Bench_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseDeclineBarbellBenchPressMuscleMap({ title = "Decline Barbell Bench Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
