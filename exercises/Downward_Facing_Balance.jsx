import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Downward_Facing_Balance"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["abdominals","hamstrings"])

export default function ExerciseDownwardFacingBalanceMuscleMap({ title = "Downward Facing Balance muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
