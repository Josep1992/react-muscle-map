import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "One_Handed_Hang"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps"])

export default function ExerciseOneHandedHangMuscleMap({ title = "One Handed Hang muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
