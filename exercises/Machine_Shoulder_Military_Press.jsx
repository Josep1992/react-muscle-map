import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Machine_Shoulder_Military_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseMachineShoulderMilitaryPressMuscleMap({ title = "Machine Shoulder (Military) Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
