import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Dumbbell_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats","shoulders"])

export default function ExerciseOneArmDumbbellRowMuscleMap({ title = "One-Arm Dumbbell Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
