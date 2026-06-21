import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Goblet_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","shoulders"])

export default function ExerciseGobletSquatMuscleMap({ title = "Goblet Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
