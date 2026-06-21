import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Clean_and_Jerk"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["abdominals","glutes","hamstrings","lower back","quadriceps","traps","triceps"])

export default function ExerciseCleanAndJerkMuscleMap({ title = "Clean and Jerk muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
