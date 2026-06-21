import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bicycling_Stationary"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseBicyclingStationaryMuscleMap({ title = "Bicycling, Stationary muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
