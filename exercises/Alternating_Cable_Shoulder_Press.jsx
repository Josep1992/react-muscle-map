import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Alternating_Cable_Shoulder_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseAlternatingCableShoulderPressMuscleMap({ title = "Alternating Cable Shoulder Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
