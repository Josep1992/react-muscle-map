import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Seated_Calf_Raise"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseBarbellSeatedCalfRaiseMuscleMap({ title = "Barbell Seated Calf Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
