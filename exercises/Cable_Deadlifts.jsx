import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Deadlifts"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","hamstrings","lower back"])

export default function ExerciseCableDeadliftsMuscleMap({ title = "Cable Deadlifts muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
