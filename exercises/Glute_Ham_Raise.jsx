import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Glute_Ham_Raise"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes"])

export default function ExerciseGluteHamRaiseMuscleMap({ title = "Glute Ham Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
