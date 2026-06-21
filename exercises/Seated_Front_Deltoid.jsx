import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Front_Deltoid"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["chest"])

export default function ExerciseSeatedFrontDeltoidMuscleMap({ title = "Seated Front Deltoid muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
