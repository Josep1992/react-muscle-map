import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bent_Over_Low-Pulley_Side_Lateral"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["lower back","middle back","traps"])

export default function ExerciseBentOverLowPulleySideLateralMuscleMap({ title = "Bent Over Low-Pulley Side Lateral muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
