import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Seated_Lateral_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["middle back","traps"])

export default function ExerciseCableSeatedLateralRaiseMuscleMap({ title = "Cable Seated Lateral Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
