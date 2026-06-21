import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Suspended_Fallout"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["chest","lower back","shoulders"])

export default function ExerciseSuspendedFalloutMuscleMap({ title = "Suspended Fallout muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
