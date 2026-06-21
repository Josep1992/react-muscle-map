import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Double_Kettlebell_Jerk"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["calves","quadriceps","triceps"])

export default function ExerciseDoubleKettlebellJerkMuscleMap({ title = "Double Kettlebell Jerk muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
