import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Thigh_Adductor"
export const primaryMuscles = Object.freeze(["adductors"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings"])

export default function ExerciseThighAdductorMuscleMap({ title = "Thigh Adductor muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
