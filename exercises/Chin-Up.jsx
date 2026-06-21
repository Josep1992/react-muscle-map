import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Chin-Up"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","forearms","middle back"])

export default function ExerciseChinUpMuscleMap({ title = "Chin-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
