import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Double_Kettlebell_Alternating_Hang_Clean"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["biceps","calves","forearms","glutes","lower back","quadriceps","traps"])

export default function ExerciseDoubleKettlebellAlternatingHangCleanMuscleMap({ title = "Double Kettlebell Alternating Hang Clean muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
