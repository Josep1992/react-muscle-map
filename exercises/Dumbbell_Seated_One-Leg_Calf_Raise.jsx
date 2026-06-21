import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Seated_One-Leg_Calf_Raise"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseDumbbellSeatedOneLegCalfRaiseMuscleMap({ title = "Dumbbell Seated One-Leg Calf Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
