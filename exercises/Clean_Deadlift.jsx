import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Clean_Deadlift"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","lower back","middle back","quadriceps","traps"])

export default function ExerciseCleanDeadliftMuscleMap({ title = "Clean Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
