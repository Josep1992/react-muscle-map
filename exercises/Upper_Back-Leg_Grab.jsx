import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Upper_Back-Leg_Grab"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["lower back","middle back"])

export default function ExerciseUpperBackLegGrabMuscleMap({ title = "Upper Back-Leg Grab muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
