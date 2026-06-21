import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Incline_Bench_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseSmithMachineInclineBenchPressMuscleMap({ title = "Smith Machine Incline Bench Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
