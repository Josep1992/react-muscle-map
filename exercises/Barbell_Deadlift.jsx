import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Deadlift"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["calves","forearms","glutes","hamstrings","lats","middle back","quadriceps","traps"])

export default function ExerciseBarbellDeadliftMuscleMap({ title = "Barbell Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
