import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Clean"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","forearms","glutes","lower back","quadriceps","shoulders","traps"])

export default function ExerciseDumbbellCleanMuscleMap({ title = "Dumbbell Clean muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
