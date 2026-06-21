import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Rocky_Pull-Ups_Pulldowns"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back","shoulders"])

export default function ExerciseRockyPullUpsPulldownsMuscleMap({ title = "Rocky Pull-Ups/Pulldowns muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
