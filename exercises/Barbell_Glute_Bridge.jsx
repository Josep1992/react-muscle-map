import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Glute_Bridge"
export const primaryMuscles = Object.freeze(["glutes"])
export const secondaryMuscles = Object.freeze(["calves","hamstrings"])

export default function ExerciseBarbellGluteBridgeMuscleMap({ title = "Barbell Glute Bridge muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
