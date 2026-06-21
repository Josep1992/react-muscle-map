import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Prone_Incline_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDumbbellProneInclineCurlMuscleMap({ title = "Dumbbell Prone Incline Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
