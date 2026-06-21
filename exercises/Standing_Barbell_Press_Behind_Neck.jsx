import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Barbell_Press_Behind_Neck"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseStandingBarbellPressBehindNeckMuscleMap({ title = "Standing Barbell Press Behind Neck muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
