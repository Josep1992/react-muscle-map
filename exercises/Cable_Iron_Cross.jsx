import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Iron_Cross"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableIronCrossMuscleMap({ title = "Cable Iron Cross muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
