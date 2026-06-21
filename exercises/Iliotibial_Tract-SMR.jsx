import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Iliotibial_Tract-SMR"
export const primaryMuscles = Object.freeze(["abductors"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseIliotibialTractSMRMuscleMap({ title = "Iliotibial Tract-SMR muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
