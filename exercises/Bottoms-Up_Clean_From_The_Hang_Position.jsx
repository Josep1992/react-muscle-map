import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bottoms-Up_Clean_From_The_Hang_Position"
export const primaryMuscles = Object.freeze(["forearms"])
export const secondaryMuscles = Object.freeze(["biceps","shoulders"])

export default function ExerciseBottomsUpCleanFromTheHangPositionMuscleMap({ title = "Bottoms-Up Clean From The Hang Position muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
