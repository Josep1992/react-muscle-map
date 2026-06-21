import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Two-Arm_Kettlebell_Military_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseTwoArmKettlebellMilitaryPressMuscleMap({ title = "Two-Arm Kettlebell Military Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
