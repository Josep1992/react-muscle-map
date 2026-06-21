import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Side_Wrist_Pull"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["forearms","lats"])

export default function ExerciseSideWristPullMuscleMap({ title = "Side Wrist Pull muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
