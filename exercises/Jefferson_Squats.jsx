import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Jefferson_Squats"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","lower back","traps"])

export default function ExerciseJeffersonSquatsMuscleMap({ title = "Jefferson Squats muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
