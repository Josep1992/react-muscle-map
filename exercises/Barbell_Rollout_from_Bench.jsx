import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Rollout_from_Bench"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings","lats","shoulders"])

export default function ExerciseBarbellRolloutFromBenchMuscleMap({ title = "Barbell Rollout from Bench muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
