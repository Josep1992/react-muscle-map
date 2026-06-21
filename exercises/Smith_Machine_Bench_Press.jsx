import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Bench_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseSmithMachineBenchPressMuscleMap({ title = "Smith Machine Bench Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
