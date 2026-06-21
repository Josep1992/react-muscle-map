import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Face_Down_Plate_Neck_Resistance"
export const primaryMuscles = Object.freeze(["neck"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingFaceDownPlateNeckResistanceMuscleMap({ title = "Lying Face Down Plate Neck Resistance muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
