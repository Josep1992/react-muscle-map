import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Lateral_Stretch"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingLateralStretchMuscleMap({ title = "Standing Lateral Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
