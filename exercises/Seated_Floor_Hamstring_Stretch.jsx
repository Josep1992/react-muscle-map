import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Floor_Hamstring_Stretch"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves"])

export default function ExerciseSeatedFloorHamstringStretchMuscleMap({ title = "Seated Floor Hamstring Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
