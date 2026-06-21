import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Barbell_Twist"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedBarbellTwistMuscleMap({ title = "Seated Barbell Twist muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
