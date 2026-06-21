import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Shoulder_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["lats"])

export default function ExerciseShoulderRaiseMuscleMap({ title = "Shoulder Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
