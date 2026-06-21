import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Plate_Pinch"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExercisePlatePinchMuscleMap({ title = "Plate Pinch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
