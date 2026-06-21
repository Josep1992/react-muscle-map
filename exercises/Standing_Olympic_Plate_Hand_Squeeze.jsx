import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Olympic_Plate_Hand_Squeeze"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze(["biceps"])

export default function ExerciseStandingOlympicPlateHandSqueezeMuscleMap({ title = "Standing Olympic Plate Hand Squeeze muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
