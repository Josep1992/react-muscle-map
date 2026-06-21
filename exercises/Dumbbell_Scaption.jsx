import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Scaption"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["traps"])

export default function ExerciseDumbbellScaptionMuscleMap({ title = "Dumbbell Scaption muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
