import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Dumbbell_Upright_Row"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze(["biceps","shoulders"])

export default function ExerciseStandingDumbbellUprightRowMuscleMap({ title = "Standing Dumbbell Upright Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
