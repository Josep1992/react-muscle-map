import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Kettlebell_Split_Snatch"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["hamstrings","quadriceps"])

export default function ExerciseOneArmKettlebellSplitSnatchMuscleMap({ title = "One-Arm Kettlebell Split Snatch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
