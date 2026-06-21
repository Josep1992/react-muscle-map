import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Plyo_Push-up"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExercisePlyoPushUpMuscleMap({ title = "Plyo Push-up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
