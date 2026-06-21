import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Leg_Lift"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["hamstrings"])

export default function ExerciseLegLiftMuscleMap({ title = "Leg Lift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
