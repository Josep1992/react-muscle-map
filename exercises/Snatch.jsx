import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Snatch"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["biceps","glutes","hamstrings","lower back","shoulders","traps","triceps"])

export default function ExerciseSnatchMuscleMap({ title = "Snatch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
