import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Single-Arm_Cable_Crossover"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSingleArmCableCrossoverMuscleMap({ title = "Single-Arm Cable Crossover muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
