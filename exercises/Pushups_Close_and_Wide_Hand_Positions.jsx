import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Pushups_Close_and_Wide_Hand_Positions"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExercisePushupsCloseAndWideHandPositionsMuscleMap({ title = "Pushups (Close and Wide Hand Positions) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
