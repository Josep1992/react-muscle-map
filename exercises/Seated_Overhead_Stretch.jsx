import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Overhead_Stretch"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedOverheadStretchMuscleMap({ title = "Seated Overhead Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
