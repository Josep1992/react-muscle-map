import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Two-Arm_Dumbbell_Preacher_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseTwoArmDumbbellPreacherCurlMuscleMap({ title = "Two-Arm Dumbbell Preacher Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
