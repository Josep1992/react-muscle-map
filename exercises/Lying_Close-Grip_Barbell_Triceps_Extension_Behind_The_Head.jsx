import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Lying_Close-Grip_Barbell_Triceps_Extension_Behind_The_Head"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseLyingCloseGripBarbellTricepsExtensionBehindTheHeadMuscleMap({ title = "Lying Close-Grip Barbell Triceps Extension Behind The Head muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
