import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Plate_Twist"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExercisePlateTwistMuscleMap({ title = "Plate Twist muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
