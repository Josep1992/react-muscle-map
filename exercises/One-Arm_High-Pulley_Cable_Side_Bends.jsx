import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One-Arm_High-Pulley_Cable_Side_Bends"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseOneArmHighPulleyCableSideBendsMuscleMap({ title = "One-Arm High-Pulley Cable Side Bends muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
