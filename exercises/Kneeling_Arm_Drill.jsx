import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kneeling_Arm_Drill"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["abdominals"])

export default function ExerciseKneelingArmDrillMuscleMap({ title = "Kneeling Arm Drill muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
