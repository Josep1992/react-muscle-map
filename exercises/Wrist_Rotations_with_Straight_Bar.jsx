import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Wrist_Rotations_with_Straight_Bar"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseWristRotationsWithStraightBarMuscleMap({ title = "Wrist Rotations with Straight Bar muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
