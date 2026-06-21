import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Iron_Crosses_stretch"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseIronCrossesStretchMuscleMap({ title = "Iron Crosses (stretch) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
