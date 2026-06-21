import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Power_Clean_from_Blocks"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["quadriceps"])

export default function ExercisePowerCleanFromBlocksMuscleMap({ title = "Power Clean from Blocks muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
