import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Toe_Touches"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves"])

export default function ExerciseStandingToeTouchesMuscleMap({ title = "Standing Toe Touches muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
