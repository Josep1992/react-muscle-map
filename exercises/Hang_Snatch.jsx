import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hang_Snatch"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["abdominals","calves","forearms","glutes","lower back","quadriceps","shoulders","traps"])

export default function ExerciseHangSnatchMuscleMap({ title = "Hang Snatch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
