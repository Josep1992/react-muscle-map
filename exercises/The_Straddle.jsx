import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "The_Straddle"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["adductors","calves"])

export default function ExerciseTheStraddleMuscleMap({ title = "The Straddle muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
