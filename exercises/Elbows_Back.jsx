import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Elbows_Back"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseElbowsBackMuscleMap({ title = "Elbows Back muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
