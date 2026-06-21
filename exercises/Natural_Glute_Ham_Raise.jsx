import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Natural_Glute_Ham_Raise"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes","lower back"])

export default function ExerciseNaturalGluteHamRaiseMuscleMap({ title = "Natural Glute Ham Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
