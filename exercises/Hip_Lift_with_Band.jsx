import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hip_Lift_with_Band"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["calves","hamstrings"])

export default function ExerciseHipLiftWithBandMuscleMap({ title = "Hip Lift with Band muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
