import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "London_Bridges"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","forearms","middle back"])

export default function ExerciseLondonBridgesMuscleMap({ title = "London Bridges muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
