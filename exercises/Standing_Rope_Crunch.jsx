import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Rope_Crunch"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingRopeCrunchMuscleMap({ title = "Standing Rope Crunch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
