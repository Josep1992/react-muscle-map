import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Butt_Lift_Bridge"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["hamstrings"])

export default function ExerciseButtLiftBridgeMuscleMap({ title = "Butt Lift (Bridge) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
