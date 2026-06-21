import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "All_Fours_Quad_Stretch"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["quadriceps"])

export default function ExerciseAllFoursQuadStretchMuscleMap({ title = "All Fours Quad Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
