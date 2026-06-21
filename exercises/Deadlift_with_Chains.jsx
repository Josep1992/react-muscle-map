import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Deadlift_with_Chains"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","hamstrings","middle back","quadriceps","traps"])

export default function ExerciseDeadliftWithChainsMuscleMap({ title = "Deadlift with Chains muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
