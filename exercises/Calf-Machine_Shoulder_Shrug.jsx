import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Calf-Machine_Shoulder_Shrug"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCalfMachineShoulderShrugMuscleMap({ title = "Calf-Machine Shoulder Shrug muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
