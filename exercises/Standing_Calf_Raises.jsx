import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Calf_Raises"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingCalfRaisesMuscleMap({ title = "Standing Calf Raises muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
