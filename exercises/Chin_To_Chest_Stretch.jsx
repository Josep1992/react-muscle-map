import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Chin_To_Chest_Stretch"
export const primaryMuscles = Object.freeze(["neck"])
export const secondaryMuscles = Object.freeze(["traps"])

export default function ExerciseChinToChestStretchMuscleMap({ title = "Chin To Chest Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
