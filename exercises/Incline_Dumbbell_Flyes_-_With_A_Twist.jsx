import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Incline_Dumbbell_Flyes_-_With_A_Twist"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseInclineDumbbellFlyesWithATwistMuscleMap({ title = "Incline Dumbbell Flyes - With A Twist muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
