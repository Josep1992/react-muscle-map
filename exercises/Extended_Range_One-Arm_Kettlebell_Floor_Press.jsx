import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Extended_Range_One-Arm_Kettlebell_Floor_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseExtendedRangeOneArmKettlebellFloorPressMuscleMap({ title = "Extended Range One-Arm Kettlebell Floor Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
