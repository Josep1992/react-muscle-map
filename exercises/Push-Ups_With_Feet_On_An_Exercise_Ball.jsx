import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Push-Ups_With_Feet_On_An_Exercise_Ball"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExercisePushUpsWithFeetOnAnExerciseBallMuscleMap({ title = "Push-Ups With Feet On An Exercise Ball muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
