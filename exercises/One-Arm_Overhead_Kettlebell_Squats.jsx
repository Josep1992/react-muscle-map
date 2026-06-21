import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Overhead_Kettlebell_Squats"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","shoulders"])

export default function ExerciseOneArmOverheadKettlebellSquatsMuscleMap({ title = "One-Arm Overhead Kettlebell Squats muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
