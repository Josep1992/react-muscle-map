import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Rear_Delt_Row"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["biceps","lats","middle back"])

export default function ExerciseBarbellRearDeltRowMuscleMap({ title = "Barbell Rear Delt Row muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
