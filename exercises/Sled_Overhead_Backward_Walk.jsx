import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Sled_Overhead_Backward_Walk"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["calves","middle back","quadriceps"])

export default function ExerciseSledOverheadBackwardWalkMuscleMap({ title = "Sled Overhead Backward Walk muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
