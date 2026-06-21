import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hanging_Leg_Raise"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseHangingLegRaiseMuscleMap({ title = "Hanging Leg Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
