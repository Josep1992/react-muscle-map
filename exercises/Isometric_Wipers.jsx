import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Isometric_Wipers"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["abdominals","shoulders","triceps"])

export default function ExerciseIsometricWipersMuscleMap({ title = "Isometric Wipers muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
