import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Single_Dumbbell_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["forearms","traps"])

export default function ExerciseSingleDumbbellRaiseMuscleMap({ title = "Single Dumbbell Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
