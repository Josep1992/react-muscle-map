import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Smith_Machine_Bent_Over_Row"
export const primaryMuscles = Object.freeze(["middle back"])
export const secondaryMuscles = Object.freeze(["biceps","lats","shoulders"])

export default function ExerciseSmithMachineBentOverRowMuscleMap({ title = "Smith Machine Bent Over Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
