import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Wrist_Roller"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseWristRollerMuscleMap({ title = "Wrist Roller muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
