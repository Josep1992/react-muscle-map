import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Close-Grip_Barbell_Triceps_Press_To_Chin"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingCloseGripBarbellTricepsPressToChinMuscleMap({ title = "Lying Close-Grip Barbell Triceps Press To Chin muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
