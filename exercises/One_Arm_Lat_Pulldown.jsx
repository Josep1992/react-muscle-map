import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One_Arm_Lat_Pulldown"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back"])

export default function ExerciseOneArmLatPulldownMuscleMap({ title = "One Arm Lat Pulldown muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
