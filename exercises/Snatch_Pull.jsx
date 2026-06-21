import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Snatch_Pull"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes","lower back","quadriceps","traps"])

export default function ExerciseSnatchPullMuscleMap({ title = "Snatch Pull muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
