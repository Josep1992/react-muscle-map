import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hang_Clean_-_Below_the_Knees"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","forearms","glutes","hamstrings","lower back","shoulders","traps"])

export default function ExerciseHangCleanBelowTheKneesMuscleMap({ title = "Hang Clean - Below the Knees muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
