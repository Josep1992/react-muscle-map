import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Incline_Shoulder_Raise"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseDumbbellInclineShoulderRaiseMuscleMap({ title = "Dumbbell Incline Shoulder Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
