import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Chest_Push_from_3_point_stance"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["abdominals","shoulders","triceps"])

export default function ExerciseChestPushFrom3PointStanceMuscleMap({ title = "Chest Push from 3 point stance muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
