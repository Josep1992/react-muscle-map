import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kipping_Muscle_Up"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["abdominals","biceps","forearms","middle back","shoulders","traps","triceps"])

export default function ExerciseKippingMuscleUpMuscleMap({ title = "Kipping Muscle Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
