import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Decline_Dumbbell_Bench_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseDeclineDumbbellBenchPressMuscleMap({ title = "Decline Dumbbell Bench Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
