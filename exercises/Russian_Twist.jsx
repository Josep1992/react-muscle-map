import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Russian_Twist"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["lower back"])

export default function ExerciseRussianTwistMuscleMap({ title = "Russian Twist muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
