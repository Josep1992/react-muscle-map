import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Leg_Pull-In"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLegPullInMuscleMap({ title = "Leg Pull-In muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
