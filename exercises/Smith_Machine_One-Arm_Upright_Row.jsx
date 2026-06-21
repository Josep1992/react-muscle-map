import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_One-Arm_Upright_Row"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["biceps","traps"])

export default function ExerciseSmithMachineOneArmUprightRowMuscleMap({ title = "Smith Machine One-Arm Upright Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
