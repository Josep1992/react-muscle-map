import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Triceps_Overhead_Extension_with_Rope"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseTricepsOverheadExtensionWithRopeMuscleMap({ title = "Triceps Overhead Extension with Rope muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
