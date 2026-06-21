import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Stiff-Legged_Deadlift"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["glutes","lower back"])

export default function ExerciseSmithMachineStiffLeggedDeadliftMuscleMap({ title = "Smith Machine Stiff-Legged Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
