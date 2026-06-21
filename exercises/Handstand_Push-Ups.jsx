import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Handstand_Push-Ups"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseHandstandPushUpsMuscleMap({ title = "Handstand Push-Ups muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
