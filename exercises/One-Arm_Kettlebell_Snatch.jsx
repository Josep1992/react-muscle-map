import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_Kettlebell_Snatch"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","lower back","traps","triceps"])

export default function ExerciseOneArmKettlebellSnatchMuscleMap({ title = "One-Arm Kettlebell Snatch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
