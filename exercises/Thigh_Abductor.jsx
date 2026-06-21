import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Thigh_Abductor"
export const primaryMuscles = Object.freeze(["abductors"])
export const secondaryMuscles = Object.freeze(["glutes"])

export default function ExerciseThighAbductorMuscleMap({ title = "Thigh Abductor muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
