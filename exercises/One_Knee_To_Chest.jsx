import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One_Knee_To_Chest"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["hamstrings","lower back"])

export default function ExerciseOneKneeToChestMuscleMap({ title = "One Knee To Chest muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
