import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Decline_Oblique_Crunch"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDeclineObliqueCrunchMuscleMap({ title = "Decline Oblique Crunch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
