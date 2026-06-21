import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Sumo_Deadlift_with_Chains"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","forearms","glutes","lower back","middle back","quadriceps","traps"])

export default function ExerciseSumoDeadliftWithChainsMuscleMap({ title = "Sumo Deadlift with Chains muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
