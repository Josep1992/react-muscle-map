import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Wide-Grip_Lat_Pulldown"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back","shoulders"])

export default function ExerciseWideGripLatPulldownMuscleMap({ title = "Wide-Grip Lat Pulldown muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
