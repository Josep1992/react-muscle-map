import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Chain_Handle_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseChainHandleExtensionMuscleMap({ title = "Chain Handle Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
