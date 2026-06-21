import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Linear_Acceleration_Wall_Drill"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes","quadriceps"])

export default function ExerciseLinearAccelerationWallDrillMuscleMap({ title = "Linear Acceleration Wall Drill muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
