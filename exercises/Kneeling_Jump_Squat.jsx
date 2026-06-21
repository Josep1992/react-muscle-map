import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kneeling_Jump_Squat"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["calves","hamstrings","quadriceps"])

export default function ExerciseKneelingJumpSquatMuscleMap({ title = "Kneeling Jump Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
