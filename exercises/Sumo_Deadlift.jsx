import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Sumo_Deadlift"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["adductors","forearms","glutes","lower back","middle back","quadriceps","traps"])

export default function ExerciseSumoDeadliftMuscleMap({ title = "Sumo Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
