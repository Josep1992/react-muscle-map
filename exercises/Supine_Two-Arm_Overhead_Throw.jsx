import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Supine_Two-Arm_Overhead_Throw"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["chest","lats","shoulders"])

export default function ExerciseSupineTwoArmOverheadThrowMuscleMap({ title = "Supine Two-Arm Overhead Throw muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
