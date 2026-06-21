import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bodyweight_Flyes"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["abdominals","shoulders","triceps"])

export default function ExerciseBodyweightFlyesMuscleMap({ title = "Bodyweight Flyes muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
