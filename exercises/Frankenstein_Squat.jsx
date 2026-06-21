import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Frankenstein_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abdominals","calves","glutes","hamstrings"])

export default function ExerciseFrankensteinSquatMuscleMap({ title = "Frankenstein Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
