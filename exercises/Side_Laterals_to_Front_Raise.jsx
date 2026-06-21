import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Side_Laterals_to_Front_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["traps"])

export default function ExerciseSideLateralsToFrontRaiseMuscleMap({ title = "Side Laterals to Front Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
