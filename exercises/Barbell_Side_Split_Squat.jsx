import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Side_Split_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","hamstrings","lower back"])

export default function ExerciseBarbellSideSplitSquatMuscleMap({ title = "Barbell Side Split Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
