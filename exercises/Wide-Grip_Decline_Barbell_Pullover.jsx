import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Wide-Grip_Decline_Barbell_Pullover"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseWideGripDeclineBarbellPulloverMuscleMap({ title = "Wide-Grip Decline Barbell Pullover muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
