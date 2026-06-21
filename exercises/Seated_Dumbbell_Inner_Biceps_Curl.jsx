import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Dumbbell_Inner_Biceps_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedDumbbellInnerBicepsCurlMuscleMap({ title = "Seated Dumbbell Inner Biceps Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
