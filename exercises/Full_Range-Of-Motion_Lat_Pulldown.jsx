import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Full_Range-Of-Motion_Lat_Pulldown"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back","shoulders"])

export default function ExerciseFullRangeOfMotionLatPulldownMuscleMap({ title = "Full Range-Of-Motion Lat Pulldown muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
