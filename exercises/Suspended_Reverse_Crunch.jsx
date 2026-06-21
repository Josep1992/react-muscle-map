import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Suspended_Reverse_Crunch"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSuspendedReverseCrunchMuscleMap({ title = "Suspended Reverse Crunch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
