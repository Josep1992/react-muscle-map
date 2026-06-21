import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Kettlebell_Push_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["calves","quadriceps","triceps"])

export default function ExerciseOneArmKettlebellPushPressMuscleMap({ title = "One-Arm Kettlebell Push Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
