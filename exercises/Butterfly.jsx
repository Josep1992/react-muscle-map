import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Butterfly"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseButterflyMuscleMap({ title = "Butterfly muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
