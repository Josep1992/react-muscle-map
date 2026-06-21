import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Isometric_Neck_Exercise_-_Sides"
export const primaryMuscles = Object.freeze(["neck"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseIsometricNeckExerciseSidesMuscleMap({ title = "Isometric Neck Exercise - Sides muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
