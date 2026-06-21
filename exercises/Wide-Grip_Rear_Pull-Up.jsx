import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Wide-Grip_Rear_Pull-Up"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back","shoulders"])

export default function ExerciseWideGripRearPullUpMuscleMap({ title = "Wide-Grip Rear Pull-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
