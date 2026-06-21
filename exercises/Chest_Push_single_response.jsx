import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Chest_Push_single_response"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["abdominals","shoulders","triceps"])

export default function ExerciseChestPushSingleResponseMuscleMap({ title = "Chest Push (single response) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
