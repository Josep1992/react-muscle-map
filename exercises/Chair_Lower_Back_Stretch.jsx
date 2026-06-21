import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Chair_Lower_Back_Stretch"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["lower back"])

export default function ExerciseChairLowerBackStretchMuscleMap({ title = "Chair Lower Back Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
