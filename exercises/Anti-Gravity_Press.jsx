import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Anti-Gravity_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["middle back","traps","triceps"])

export default function ExerciseAntiGravityPressMuscleMap({ title = "Anti-Gravity Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
