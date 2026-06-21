import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One_Arm_Dumbbell_Preacher_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseOneArmDumbbellPreacherCurlMuscleMap({ title = "One Arm Dumbbell Preacher Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
