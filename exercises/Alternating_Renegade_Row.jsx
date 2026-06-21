import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Alternating_Renegade_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["abdominals","biceps","chest","lats","triceps"])

export default function ExerciseAlternatingRenegadeRowMuscleMap({ title = "Alternating Renegade Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
