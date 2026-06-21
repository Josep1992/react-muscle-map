import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Intermediate_Groin_Stretch"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseIntermediateGroinStretchMuscleMap({ title = "Intermediate Groin Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
