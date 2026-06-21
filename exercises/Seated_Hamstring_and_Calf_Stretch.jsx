import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Hamstring_and_Calf_Stretch"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves"])

export default function ExerciseSeatedHamstringAndCalfStretchMuscleMap({ title = "Seated Hamstring and Calf Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
