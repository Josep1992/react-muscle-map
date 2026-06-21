import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bench_Press_with_Chains"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","lats","shoulders"])

export default function ExerciseBenchPressWithChainsMuscleMap({ title = "Bench Press with Chains muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
