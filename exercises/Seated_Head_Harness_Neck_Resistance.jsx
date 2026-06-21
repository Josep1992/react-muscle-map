import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Head_Harness_Neck_Resistance"
export const primaryMuscles = Object.freeze(["neck"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedHeadHarnessNeckResistanceMuscleMap({ title = "Seated Head Harness Neck Resistance muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
