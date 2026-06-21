import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Shoulder_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["chest","triceps"])

export default function ExerciseBarbellShoulderPressMuscleMap({ title = "Barbell Shoulder Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
