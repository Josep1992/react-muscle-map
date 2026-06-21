import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Crucifix"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseCrucifixMuscleMap({ title = "Crucifix muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
