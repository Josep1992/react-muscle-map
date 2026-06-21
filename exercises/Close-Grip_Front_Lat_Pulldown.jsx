import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Close-Grip_Front_Lat_Pulldown"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back","shoulders"])

export default function ExerciseCloseGripFrontLatPulldownMuscleMap({ title = "Close-Grip Front Lat Pulldown muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
