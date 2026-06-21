import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kneeling_High_Pulley_Row"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back"])

export default function ExerciseKneelingHighPulleyRowMuscleMap({ title = "Kneeling High Pulley Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
