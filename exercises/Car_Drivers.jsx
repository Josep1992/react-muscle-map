import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Car_Drivers"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseCarDriversMuscleMap({ title = "Car Drivers muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
