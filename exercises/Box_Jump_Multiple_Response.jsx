import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Box_Jump_Multiple_Response"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","glutes","quadriceps"])

export default function ExerciseBoxJumpMultipleResponseMuscleMap({ title = "Box Jump (Multiple Response) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
