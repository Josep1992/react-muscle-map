import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bent_Over_Two-Dumbbell_Row_With_Palms_In"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats"])

export default function ExerciseBentOverTwoDumbbellRowWithPalmsInMuscleMap({ title = "Bent Over Two-Dumbbell Row With Palms In muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
