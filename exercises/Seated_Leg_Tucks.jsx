import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Leg_Tucks"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedLegTucksMuscleMap({ title = "Seated Leg Tucks muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
