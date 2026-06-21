import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lower_Back-SMR"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLowerBackSMRMuscleMap({ title = "Lower Back-SMR muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
