import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Intermediate_Hip_Flexor_and_Quad_Stretch"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseIntermediateHipFlexorAndQuadStretchMuscleMap({ title = "Intermediate Hip Flexor and Quad Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
