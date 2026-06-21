import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Gastrocnemius_Calf_Stretch"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze(["hamstrings"])

export default function ExerciseStandingGastrocnemiusCalfStretchMuscleMap({ title = "Standing Gastrocnemius Calf Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
