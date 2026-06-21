import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Pin_Presses"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","forearms","lats","middle back","shoulders"])

export default function ExercisePinPressesMuscleMap({ title = "Pin Presses muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
