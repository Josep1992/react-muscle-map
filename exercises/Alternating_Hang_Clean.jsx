import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Alternating_Hang_Clean"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["biceps","calves","forearms","glutes","lower back","traps"])

export default function ExerciseAlternatingHangCleanMuscleMap({ title = "Alternating Hang Clean muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
