import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hug_Knees_To_Chest"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["glutes"])

export default function ExerciseHugKneesToChestMuscleMap({ title = "Hug Knees To Chest muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
