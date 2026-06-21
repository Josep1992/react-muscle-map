import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Knee_Across_The_Body"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["abductors","lower back"])

export default function ExerciseKneeAcrossTheBodyMuscleMap({ title = "Knee Across The Body muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
