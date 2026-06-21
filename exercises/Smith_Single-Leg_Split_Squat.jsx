import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Single-Leg_Split_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseSmithSingleLegSplitSquatMuscleMap({ title = "Smith Single-Leg Split Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
