import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Push-Up_Wide"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["abdominals","shoulders","triceps"])

export default function ExercisePushUpWideMuscleMap({ title = "Push-Up Wide muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
