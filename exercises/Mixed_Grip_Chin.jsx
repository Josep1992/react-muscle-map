import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Mixed_Grip_Chin"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats"])

export default function ExerciseMixedGripChinMuscleMap({ title = "Mixed Grip Chin muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
