import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Incline_Shoulder_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["chest"])

export default function ExerciseBarbellInclineShoulderRaiseMuscleMap({ title = "Barbell Incline Shoulder Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
