import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Supine_Chest_Throw"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseSupineChestThrowMuscleMap({ title = "Supine Chest Throw muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
