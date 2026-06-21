import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One_Arm_Floor_Press"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseOneArmFloorPressMuscleMap({ title = "One Arm Floor Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
