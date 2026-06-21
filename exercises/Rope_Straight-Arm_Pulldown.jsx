import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rope_Straight-Arm_Pulldown"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseRopeStraightArmPulldownMuscleMap({ title = "Rope Straight-Arm Pulldown muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
