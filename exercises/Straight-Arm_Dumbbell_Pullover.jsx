import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Straight-Arm_Dumbbell_Pullover"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["lats","shoulders","triceps"])

export default function ExerciseStraightArmDumbbellPulloverMuscleMap({ title = "Straight-Arm Dumbbell Pullover muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
