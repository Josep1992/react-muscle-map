import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Seated_Crunch"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableSeatedCrunchMuscleMap({ title = "Cable Seated Crunch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
