import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_One-Arm_Shoulder_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseDumbbellOneArmShoulderPressMuscleMap({ title = "Dumbbell One-Arm Shoulder Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
