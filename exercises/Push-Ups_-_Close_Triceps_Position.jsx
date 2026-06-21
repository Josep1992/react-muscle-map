import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Push-Ups_-_Close_Triceps_Position"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExercisePushUpsCloseTricepsPositionMuscleMap({ title = "Push-Ups - Close Triceps Position muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
