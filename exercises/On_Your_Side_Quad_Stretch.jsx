import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "On_Your_Side_Quad_Stretch"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseOnYourSideQuadStretchMuscleMap({ title = "On Your Side Quad Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
