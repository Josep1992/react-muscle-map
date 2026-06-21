import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Push-Ups_With_Feet_Elevated"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExercisePushUpsWithFeetElevatedMuscleMap({ title = "Push-Ups With Feet Elevated muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
