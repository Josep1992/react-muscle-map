import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Deficit_Deadlift"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","hamstrings","middle back","quadriceps","traps"])

export default function ExerciseDeficitDeadliftMuscleMap({ title = "Deficit Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
