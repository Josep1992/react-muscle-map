import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Romanian_Deadlift_from_Deficit"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","lower back","traps"])

export default function ExerciseRomanianDeadliftFromDeficitMuscleMap({ title = "Romanian Deadlift from Deficit muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
