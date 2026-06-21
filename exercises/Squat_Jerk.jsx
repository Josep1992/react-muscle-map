import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Squat_Jerk"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","shoulders","triceps"])

export default function ExerciseSquatJerkMuscleMap({ title = "Squat Jerk muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
