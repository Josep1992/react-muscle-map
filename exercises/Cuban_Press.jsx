import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cuban_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["traps"])

export default function ExerciseCubanPressMuscleMap({ title = "Cuban Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
