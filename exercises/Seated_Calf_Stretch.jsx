import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Calf_Stretch"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze(["hamstrings","lower back"])

export default function ExerciseSeatedCalfStretchMuscleMap({ title = "Seated Calf Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
