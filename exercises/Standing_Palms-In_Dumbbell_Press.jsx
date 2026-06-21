import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Palms-In_Dumbbell_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseStandingPalmsInDumbbellPressMuscleMap({ title = "Standing Palms-In Dumbbell Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
