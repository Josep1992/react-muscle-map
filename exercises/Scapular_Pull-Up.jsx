import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Scapular_Pull-Up"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze(["lats","middle back"])

export default function ExerciseScapularPullUpMuscleMap({ title = "Scapular Pull-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
