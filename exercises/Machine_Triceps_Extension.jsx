import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Machine_Triceps_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseMachineTricepsExtensionMuscleMap({ title = "Machine Triceps Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
