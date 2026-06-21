import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Good_Mornings"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["glutes"])

export default function ExerciseSeatedGoodMorningsMuscleMap({ title = "Seated Good Mornings muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
