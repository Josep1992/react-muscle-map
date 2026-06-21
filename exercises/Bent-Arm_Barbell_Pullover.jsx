import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bent-Arm_Barbell_Pullover"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["chest","lats","shoulders","triceps"])

export default function ExerciseBentArmBarbellPulloverMuscleMap({ title = "Bent-Arm Barbell Pullover muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
