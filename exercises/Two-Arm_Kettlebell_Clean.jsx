import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Two-Arm_Kettlebell_Clean"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings","lower back","traps"])

export default function ExerciseTwoArmKettlebellCleanMuscleMap({ title = "Two-Arm Kettlebell Clean muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
