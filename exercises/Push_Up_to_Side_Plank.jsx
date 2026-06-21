import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Push_Up_to_Side_Plank"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["abdominals","shoulders","triceps"])

export default function ExercisePushUpToSidePlankMuscleMap({ title = "Push Up to Side Plank muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
