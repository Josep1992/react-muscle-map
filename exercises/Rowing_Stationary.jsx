import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rowing_Stationary"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["biceps","calves","glutes","hamstrings","lower back","middle back"])

export default function ExerciseRowingStationaryMuscleMap({ title = "Rowing, Stationary muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
