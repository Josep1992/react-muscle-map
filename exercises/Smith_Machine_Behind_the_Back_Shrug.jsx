import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Behind_the_Back_Shrug"
export const primaryMuscles = Object.freeze(["traps"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseSmithMachineBehindTheBackShrugMuscleMap({ title = "Smith Machine Behind the Back Shrug muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
