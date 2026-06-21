import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Side_To_Side_Chins"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","forearms","middle back","shoulders"])

export default function ExerciseSideToSideChinsMuscleMap({ title = "Side To Side Chins muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
