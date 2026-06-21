import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Two-Arm_Overhead_Throw"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["chest","lats"])

export default function ExerciseStandingTwoArmOverheadThrowMuscleMap({ title = "Standing Two-Arm Overhead Throw muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
