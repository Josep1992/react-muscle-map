import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Grip_Bent-Over_Rows"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats","shoulders"])

export default function ExerciseReverseGripBentOverRowsMuscleMap({ title = "Reverse Grip Bent-Over Rows muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
