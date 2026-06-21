import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Decline_Reverse_Crunch"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDeclineReverseCrunchMuscleMap({ title = "Decline Reverse Crunch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
