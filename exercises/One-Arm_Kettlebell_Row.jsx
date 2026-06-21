import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Kettlebell_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats"])

export default function ExerciseOneArmKettlebellRowMuscleMap({ title = "One-Arm Kettlebell Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
