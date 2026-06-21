import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Clean_Pull"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","hamstrings","lower back","traps"])

export default function ExerciseCleanPullMuscleMap({ title = "Clean Pull muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
