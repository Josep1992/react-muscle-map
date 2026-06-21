import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Front_Plate_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseFrontPlateRaiseMuscleMap({ title = "Front Plate Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
