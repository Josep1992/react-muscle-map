import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Chair_Leg_Extended_Stretch"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["adductors"])

export default function ExerciseChairLegExtendedStretchMuscleMap({ title = "Chair Leg Extended Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
