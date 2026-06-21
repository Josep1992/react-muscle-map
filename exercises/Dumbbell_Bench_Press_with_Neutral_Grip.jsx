import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Bench_Press_with_Neutral_Grip"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseDumbbellBenchPressWithNeutralGripMuscleMap({ title = "Dumbbell Bench Press with Neutral Grip muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
