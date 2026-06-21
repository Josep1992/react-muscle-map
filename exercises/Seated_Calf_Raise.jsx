import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Calf_Raise"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseSeatedCalfRaiseMuscleMap({ title = "Seated Calf Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
