import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Wrist_Circles"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseWristCirclesMuscleMap({ title = "Wrist Circles muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
