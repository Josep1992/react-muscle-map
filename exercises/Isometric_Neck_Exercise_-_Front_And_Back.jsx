import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Isometric_Neck_Exercise_-_Front_And_Back"
export const primaryMuscles = Object.freeze(["neck"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseIsometricNeckExerciseFrontAndBackMuscleMap({ title = "Isometric Neck Exercise - Front And Back muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
