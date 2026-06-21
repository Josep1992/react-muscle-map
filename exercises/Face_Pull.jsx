import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Face_Pull"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["middle back"])

export default function ExerciseFacePullMuscleMap({ title = "Face Pull muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
