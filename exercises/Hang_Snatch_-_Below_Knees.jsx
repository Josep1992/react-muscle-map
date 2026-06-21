import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hang_Snatch_-_Below_Knees"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["abdominals","calves","forearms","glutes","lower back","quadriceps","shoulders","traps"])

export default function ExerciseHangSnatchBelowKneesMuscleMap({ title = "Hang Snatch - Below Knees muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
