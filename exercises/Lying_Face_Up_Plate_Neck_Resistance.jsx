import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Face_Up_Plate_Neck_Resistance"
export const primaryMuscles = Object.freeze(["neck"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingFaceUpPlateNeckResistanceMuscleMap({ title = "Lying Face Up Plate Neck Resistance muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
