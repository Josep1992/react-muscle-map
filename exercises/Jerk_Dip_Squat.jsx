import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Jerk_Dip_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abdominals","calves"])

export default function ExerciseJerkDipSquatMuscleMap({ title = "Jerk Dip Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
