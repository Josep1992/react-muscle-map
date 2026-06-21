import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Reverse_Crunch"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableReverseCrunchMuscleMap({ title = "Cable Reverse Crunch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
