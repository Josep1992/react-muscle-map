import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Lying_Rear_Lateral_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDumbbellLyingRearLateralRaiseMuscleMap({ title = "Dumbbell Lying Rear Lateral Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
