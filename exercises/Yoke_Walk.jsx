import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Yoke_Walk"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abdominals","abductors","adductors","calves","glutes","hamstrings","lower back"])

export default function ExerciseYokeWalkMuscleMap({ title = "Yoke Walk muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
