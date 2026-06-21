import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Hip_Flexors"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingHipFlexorsMuscleMap({ title = "Standing Hip Flexors muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
