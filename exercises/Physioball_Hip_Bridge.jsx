import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Physioball_Hip_Bridge"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["hamstrings"])

export default function ExercisePhysioballHipBridgeMuscleMap({ title = "Physioball Hip Bridge muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
