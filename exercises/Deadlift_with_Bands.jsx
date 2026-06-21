import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Deadlift_with_Bands"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","hamstrings","middle back","quadriceps","traps"])

export default function ExerciseDeadliftWithBandsMuscleMap({ title = "Deadlift with Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
