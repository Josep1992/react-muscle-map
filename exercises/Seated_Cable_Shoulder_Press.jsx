import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Cable_Shoulder_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseSeatedCableShoulderPressMuscleMap({ title = "Seated Cable Shoulder Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
