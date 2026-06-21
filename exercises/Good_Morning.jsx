import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Good_Morning"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["abdominals","glutes","lower back"])

export default function ExerciseGoodMorningMuscleMap({ title = "Good Morning muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
