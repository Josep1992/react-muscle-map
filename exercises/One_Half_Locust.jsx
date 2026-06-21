import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One_Half_Locust"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abdominals","biceps","chest"])

export default function ExerciseOneHalfLocustMuscleMap({ title = "One Half Locust muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
