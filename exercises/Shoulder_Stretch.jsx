import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Shoulder_Stretch"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseShoulderStretchMuscleMap({ title = "Shoulder Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
