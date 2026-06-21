import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Side_Deadlift"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abdominals","calves","glutes","hamstrings","lower back","traps"])

export default function ExerciseOneArmSideDeadliftMuscleMap({ title = "One-Arm Side Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
