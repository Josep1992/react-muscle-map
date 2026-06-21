import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Catch_and_Overhead_Throw"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["abdominals","chest","shoulders"])

export default function ExerciseCatchAndOverheadThrowMuscleMap({ title = "Catch and Overhead Throw muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
