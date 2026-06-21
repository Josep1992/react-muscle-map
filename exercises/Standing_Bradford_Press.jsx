import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Bradford_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseStandingBradfordPressMuscleMap({ title = "Standing Bradford Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
