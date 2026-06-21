import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Side_Lateral_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedSideLateralRaiseMuscleMap({ title = "Seated Side Lateral Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
