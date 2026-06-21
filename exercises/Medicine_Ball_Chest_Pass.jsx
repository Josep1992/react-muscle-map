import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Medicine_Ball_Chest_Pass"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseMedicineBallChestPassMuscleMap({ title = "Medicine Ball Chest Pass muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
