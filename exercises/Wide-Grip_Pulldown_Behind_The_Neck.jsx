import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Wide-Grip_Pulldown_Behind_The_Neck"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back","shoulders"])

export default function ExerciseWideGripPulldownBehindTheNeckMuscleMap({ title = "Wide-Grip Pulldown Behind The Neck muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
