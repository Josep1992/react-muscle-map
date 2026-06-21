import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Seated_Barbell_Military_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["triceps"])

export default function ExerciseSeatedBarbellMilitaryPressMuscleMap({ title = "Seated Barbell Military Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
