import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Front_Barbell_Raise_Over_Head"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingFrontBarbellRaiseOverHeadMuscleMap({ title = "Standing Front Barbell Raise Over Head muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
