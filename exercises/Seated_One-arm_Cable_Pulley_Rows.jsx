import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_One-arm_Cable_Pulley_Rows"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats","traps"])

export default function ExerciseSeatedOneArmCablePulleyRowsMuscleMap({ title = "Seated One-arm Cable Pulley Rows muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
