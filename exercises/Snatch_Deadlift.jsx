import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Snatch_Deadlift"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","hamstrings","lower back","quadriceps","traps"])

export default function ExerciseSnatchDeadliftMuscleMap({ title = "Snatch Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
