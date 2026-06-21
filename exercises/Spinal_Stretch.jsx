import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Spinal_Stretch"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["lats","lower back","neck","traps"])

export default function ExerciseSpinalStretchMuscleMap({ title = "Spinal Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
