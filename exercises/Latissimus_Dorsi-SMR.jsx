import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Latissimus_Dorsi-SMR"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLatissimusDorsiSMRMuscleMap({ title = "Latissimus Dorsi-SMR muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
