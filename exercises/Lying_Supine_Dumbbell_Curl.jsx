import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Supine_Dumbbell_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingSupineDumbbellCurlMuscleMap({ title = "Lying Supine Dumbbell Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
