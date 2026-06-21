import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kettlebell_Dead_Clean"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes","lower back","quadriceps","traps"])

export default function ExerciseKettlebellDeadCleanMuscleMap({ title = "Kettlebell Dead Clean muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
