import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Box_Skip"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","glutes","quadriceps"])

export default function ExerciseBoxSkipMuscleMap({ title = "Box Skip muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
