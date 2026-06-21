import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Clean_and_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["abdominals","calves","glutes","hamstrings","lower back","middle back","quadriceps","shoulders","traps","triceps"])

export default function ExerciseCleanAndPressMuscleMap({ title = "Clean and Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
