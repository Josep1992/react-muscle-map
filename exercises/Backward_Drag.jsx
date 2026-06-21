import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Backward_Drag"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","forearms","glutes","hamstrings","lower back"])

export default function ExerciseBackwardDragMuscleMap({ title = "Backward Drag muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
