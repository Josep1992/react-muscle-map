import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Hip_Flexion_with_Band"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseHipFlexionWithBandMuscleMap({ title = "Hip Flexion with Band muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
