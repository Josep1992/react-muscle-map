import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Return_Push_from_Stance"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["chest","triceps"])

export default function ExerciseReturnPushFromStanceMuscleMap({ title = "Return Push from Stance muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
