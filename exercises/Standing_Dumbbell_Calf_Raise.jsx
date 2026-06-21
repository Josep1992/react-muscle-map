import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Dumbbell_Calf_Raise"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingDumbbellCalfRaiseMuscleMap({ title = "Standing Dumbbell Calf Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
