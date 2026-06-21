import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Biceps_Stretch"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseStandingBicepsStretchMuscleMap({ title = "Standing Biceps Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
