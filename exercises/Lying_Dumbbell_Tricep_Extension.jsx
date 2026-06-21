import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Dumbbell_Tricep_Extension"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseLyingDumbbellTricepExtensionMuscleMap({ title = "Lying Dumbbell Tricep Extension muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
