import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bent-Arm_Dumbbell_Pullover"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["lats","shoulders","triceps"])

export default function ExerciseBentArmDumbbellPulloverMuscleMap({ title = "Bent-Arm Dumbbell Pullover muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
