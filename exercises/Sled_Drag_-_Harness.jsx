import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Sled_Drag_-_Harness"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseSledDragHarnessMuscleMap({ title = "Sled Drag - Harness muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
