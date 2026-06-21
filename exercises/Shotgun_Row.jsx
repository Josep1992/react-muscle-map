import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Shotgun_Row"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back"])

export default function ExerciseShotgunRowMuscleMap({ title = "Shotgun Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
