import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Single-Leg_High_Box_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings"])

export default function ExerciseSingleLegHighBoxSquatMuscleMap({ title = "Single-Leg High Box Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
