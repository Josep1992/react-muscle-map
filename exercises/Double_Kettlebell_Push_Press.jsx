import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Double_Kettlebell_Push_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["calves","quadriceps","triceps"])

export default function ExerciseDoubleKettlebellPushPressMuscleMap({ title = "Double Kettlebell Push Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
