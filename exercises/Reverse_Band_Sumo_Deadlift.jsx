import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Band_Sumo_Deadlift"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","forearms","glutes","lower back","quadriceps","traps"])

export default function ExerciseReverseBandSumoDeadliftMuscleMap({ title = "Reverse Band Sumo Deadlift muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
