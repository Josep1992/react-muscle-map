import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Gironda_Sternum_Chins"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back"])

export default function ExerciseGirondaSternumChinsMuscleMap({ title = "Gironda Sternum Chins muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
