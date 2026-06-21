import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dynamic_Chest_Stretch"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["middle back"])

export default function ExerciseDynamicChestStretchMuscleMap({ title = "Dynamic Chest Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
