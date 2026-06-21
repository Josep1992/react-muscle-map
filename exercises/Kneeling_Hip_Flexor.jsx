import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kneeling_Hip_Flexor"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["quadriceps"])

export default function ExerciseKneelingHipFlexorMuscleMap({ title = "Kneeling Hip Flexor muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
