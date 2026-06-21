import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Forward_Drag_with_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","quadriceps","shoulders","triceps"])

export default function ExerciseForwardDragWithPressMuscleMap({ title = "Forward Drag with Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
