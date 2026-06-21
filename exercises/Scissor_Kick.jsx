import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Scissor_Kick"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseScissorKickMuscleMap({ title = "Scissor Kick muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
