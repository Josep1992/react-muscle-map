import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Single-Cone_Sprint_Drill"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","glutes","hamstrings"])

export default function ExerciseSingleConeSprintDrillMuscleMap({ title = "Single-Cone Sprint Drill muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
