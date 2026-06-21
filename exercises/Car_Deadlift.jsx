import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Car_Deadlift"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","hamstrings","lower back","traps"])

export default function ExerciseCarDeadliftMuscleMap({ title = "Car Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
