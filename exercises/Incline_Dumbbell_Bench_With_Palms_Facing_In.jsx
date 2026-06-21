import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Dumbbell_Bench_With_Palms_Facing_In"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseInclineDumbbellBenchWithPalmsFacingInMuscleMap({ title = "Incline Dumbbell Bench With Palms Facing In muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
